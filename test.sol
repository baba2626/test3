// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./Interfaces/ICryptoLottery.sol";

contract CryptoLottery {
  address[] public players;

  address public owner;
  address public winner;
  address public tokenAddress;
  address public royaltiesAddress;

  uint256 public royaltiesPercent;
  uint256 public ticketPrice;
  uint256 public minimumDrawTime = 400; // 5 minutes
  uint256 public lastDrawTime;
  uint256 public drawId = 1;
  uint256 public minimumPlayers = 2;

  Phase public phase = Phase.start;

  event BuyTickets(address buyer, uint256 amount);
  event TransferOwnership(address newOwner);
  event Winner(address winner);
  event DistributePrize(address winner, uint256 amount);
  event SetTicketPrice(uint256 ticketPrice);
  event SetRoyaltiesPercent(uint256 newRoyaltiesPercent);
  event SetRoyaltiesAddress(address newRoyaltiesAddress);
  event SetTokenAddress(address newTokenAddress);
  event SetMinimumPlayers(uint256 newMinimumPlayers);
  event SetMinimumDrawTime(uint256 newMinimumDrawTime);


  constructor() {
    owner = msg.sender;
    tokenAddress = 0xcf185f2F3Fe19D82bFdcee59E3330FD7ba5f27ce;
    royaltiesAddress = msg.sender;
    royaltiesPercent = 1000; // 1000 => 10% 10000 => 100%
    ticketPrice = 1000000000000000; // in wei
    lastDrawTime = block.timestamp;
  }

  modifier onlyOwner() {
    if (msg.sender != owner) revert CallerNotOwner();
    _;
  }
  

  modifier hasEnoughParticipants() {
    require(getPlayers().length >= 2, "Not enough participants");
    _;
}

  function buyTickets(uint256 _numberOfTickets) public {
    require(_numberOfTickets != 0, "Number of tickets cannot be zero");
    require(phase != Phase.winnerDrawed, "Prize distribution in progress");
    uint256 amount = ticketPrice * _numberOfTickets;
    bool success = IERC20(tokenAddress).transferFrom(msg.sender, address(this), amount);
    if (success == false) revert transferFailed();
    for (uint256 i; i < _numberOfTickets; ) {
      players.push(msg.sender);
      unchecked { ++i; }
    }
    emit BuyTickets(msg.sender, _numberOfTickets);
  }

function getWinner() external onlyOwner returns(address) {
    if (players.length < minimumPlayers) revert minimumPlayersNotReach();
    if (block.timestamp < lastDrawTime + minimumDrawTime) revert drawTimeNotfinish();
    if (winner != address(0)) revert winnerAlreadyDrawed();
    uint256 winnerId = _computeRandom() % players.length;
    address winnerAddy = players[winnerId];
    winner = winnerAddy;
    phase = Phase.winnerDrawed;
    emit Winner(winnerAddy);
    return winnerAddy;
  }


  function distributePrize() external {
    _distributePrize();
  }

function _distributePrize() internal {
    if (winner == address(0)) revert noWinner();
    uint256 balance = IERC20(tokenAddress).balanceOf(address(this));
    uint256 fees = balance * royaltiesPercent / 10000;
    uint256 winnerAmount = balance - fees;
    bool success = IERC20(tokenAddress).transfer(royaltiesAddress, fees);
    if (success == false) revert transferFailed();
    success = IERC20(tokenAddress).transfer(winner, winnerAmount);
    if (success == false) revert transferFailed();

    emit DistributePrize(winner, winnerAmount);

    // Add the new draw to the draw history
    draws.push(Draw(drawId, lastDrawTime, winner, winnerAmount));
    emit DrawCreated(drawId, lastDrawTime, winner, winnerAmount);

    winner = address(0);
    delete players;
    lastDrawTime = block.timestamp;
    phase = Phase.start;
    unchecked { ++drawId; }
}



  function _computeRandom() internal view returns(uint256) {
    return (
      uint256(
        keccak256(
          abi.encodePacked(
            block.timestamp,
            block.prevrandao,
            drawId,
            players.length,
            tx.gasprice,
            blockhash(block.number),
            lastDrawTime
          )
        )
      )
    );
  }

  function getPlayers() public view returns(address[] memory) {
    return players;
  }

  function setTicketPrice(uint256 _ticketPrice) external onlyOwner {
    ticketPrice = _ticketPrice;
    emit SetTicketPrice(_ticketPrice);
  }

  function setTokenAddress(address _tokenAddress) external onlyOwner {
    tokenAddress = _tokenAddress;
    emit SetTokenAddress(_tokenAddress);
  }

  function setMinimumPlayers(uint256 _minimumPlayers) external onlyOwner {
    if (_minimumPlayers < 2) revert minimumPlayersMustGreaterThan2();
    minimumPlayers = _minimumPlayers;
    emit SetMinimumPlayers(_minimumPlayers);
  }

  function setMinimumDrawTime(uint256 _minimumDrawTime) external onlyOwner {
    minimumDrawTime = _minimumDrawTime;
    emit SetMinimumDrawTime(_minimumDrawTime);
  }

  function setRoyaltiesPercent(uint256 _royaltiesPercent) external onlyOwner {
    if (_royaltiesPercent > 1000) revert royaltiesExceedTenPercent();
    royaltiesPercent = _royaltiesPercent;
    emit SetRoyaltiesPercent(_royaltiesPercent);
  }

  function setRoyaltiesAddress(address _royaltiesAddress) external onlyOwner {
    royaltiesAddress = _royaltiesAddress;
    emit SetRoyaltiesAddress(_royaltiesAddress);
  }

  function transferOwnership(address _owner) external onlyOwner {
    owner = _owner;
    emit TransferOwnership(_owner);
  }

  function isDrawReady() public view returns (bool) {
    uint256 currentTime = block.timestamp;
    uint256 timeSinceLastDraw = currentTime - lastDrawTime;
    return getPlayers().length >= 2 && timeSinceLastDraw >= minimumDrawTime;
}

struct Draw {
    uint256 drawId;
    uint256 timestamp;
    address winner;
    uint256 prize;
}

Draw[] public draws;

event DrawCreated(uint256 drawId, uint256 timestamp, address winner, uint256 prize);

function getDrawHistory() public view returns (Draw[] memory) {
    return draws;
}


}
