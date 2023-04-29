const ERC20_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];

const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "callerNotOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "drawTimeNotfinish",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "minimumPlayersMustGreaterThan2",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "minimumPlayersNotReach",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "noWinner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "numberTicketZero",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "royaltiesExceedTenPercent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "transferFailed",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "BuyTickets",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "winner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DistributePrize",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMinimumDrawTime",
          "type": "uint256"
        }
      ],
      "name": "SetMinimumDrawTime",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMinimumPlayers",
          "type": "uint256"
        }
      ],
      "name": "SetMinimumPlayers",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newRoyaltiesAddress",
          "type": "address"
        }
      ],
      "name": "SetRoyaltiesAddress",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newRoyaltiesPercent",
          "type": "uint256"
        }
      ],
      "name": "SetRoyaltiesPercent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ticketPrice",
          "type": "uint256"
        }
      ],
      "name": "SetTicketPrice",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newTokenAddress",
          "type": "address"
        }
      ],
      "name": "SetTokenAddress",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "TransferOwnership",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "winner",
          "type": "address"
        }
      ],
      "name": "Winner",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_numberOfTickets",
          "type": "uint256"
        }
      ],
      "name": "buyTickets",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "distributePrize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "drawId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPlayers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWinner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastDrawTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minimumDrawTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minimumPlayers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "phase",
      "outputs": [
        {
          "internalType": "enum Phase",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "players",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "royaltiesAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "royaltiesPercent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minimumDrawTime",
          "type": "uint256"
        }
      ],
      "name": "setMinimumDrawTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minimumPlayers",
          "type": "uint256"
        }
      ],
      "name": "setMinimumPlayers",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_royaltiesAddress",
          "type": "address"
        }
      ],
      "name": "setRoyaltiesAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_royaltiesPercent",
          "type": "uint256"
        }
      ],
      "name": "setRoyaltiesPercent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_ticketPrice",
          "type": "uint256"
        }
      ],
      "name": "setTicketPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "setTokenAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ticketPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "winner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  

const connectWalletButton = document.getElementById("connectWalletButton");
const buyTicketForm = document.getElementById("buyTicketForm");
const numberOfTickets = document.getElementById("numberOfTickets");
const currentPrizePool = document.getElementById("currentPrizePool");
const timer = document.getElementById("timer");
const playersList = document.getElementById("playersList");
const drawHistoryTable = document.getElementById("drawHistoryTable");

const tokenAddress = '0xcf185f2F3Fe19D82bFdcee59E3330FD7ba5f27ce';
const contractAddress = "0xe8Ae8273c0637ECe886Fab6802Ce888824e113F0";

let web3, accounts, contract;

connectWalletButton.onclick = async () => {
  console.log("Connect Wallet button clicked");
  if (typeof window.ethereum !== "undefined") {
    console.log("Requesting accounts access");
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      web3 = new Web3(window.ethereum);
      accounts = await web3.eth.getAccounts();
      contract = new web3.eth.Contract(contractABI, contractAddress);
      
      connectWalletButton.disabled = true;
      connectWalletButton.innerText = "Connected";

      initializeApp();
    } catch (error) {
      console.error("Error while connecting wallet:", error);
    }
  } else {
    alert("Please install MetaMask!");
  }
};

async function initializeApp() {
  await updateCurrentPrizePool();
  await updateTimer();
  await updatePlayersList();
  await updateDrawHistory();
  
}

async function updateCurrentPrizePool() {
  const players = await contract.methods.getPlayers().call();
  const ticketPrice = await contract.methods.ticketPrice().call();
  const prizePoolWei = BigInt(players.length) * BigInt(ticketPrice);
  const prizePoolEther = web3.utils.fromWei(prizePoolWei.toString(), "ether");
  currentPrizePool.innerText = `${prizePoolEther} Pepe Coin`;
}

function formatRemainingTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

async function updateTimer() {
  const lastDrawTime = await contract.methods.lastDrawTime().call();
  const minimumDrawTime = await contract.methods.minimumDrawTime().call();
  const currentTime = Math.floor(Date.now() / 1000);
  let remainingTime = (parseInt(lastDrawTime) + parseInt(minimumDrawTime)) - currentTime;

  // Add the following console.log statements
  console.log("Last Draw Time:", lastDrawTime);
  console.log("Minimum Draw Time:", minimumDrawTime);
  console.log("Current Time:", currentTime);
  console.log("Remaining Time:", remainingTime);

  if (remainingTime <= 0) {
    timer.innerText = "00:00:00";
  } else {
    timer.innerText = formatRemainingTime(remainingTime);
  }
}

async function updatePlayersList() {
  const players = await contract.methods.getPlayers().call();
  playersList.innerHTML = "";
  players.forEach((player, index) => {
    const listItem = document.createElement("li");
    listItem.innerText = `Player ${index + 1}: ${player}`;
    playersList.appendChild(listItem);
  });
}

async function updateDrawHistory() {
  // Implement draw history update logic here
}

// ...

async function buyTickets(numTickets) {
  const ticketPriceWei = await contract.methods.ticketPrice().call();
  const totalCost = BigInt(ticketPriceWei) * BigInt(numTickets);

  // Approve the ticket sale contract to spend the required amount of tokens
  const tokenContract = new web3.eth.Contract(ERC20_ABI, tokenAddress);
  await tokenContract.methods.approve(contractAddress, totalCost.toString()).send({ from: accounts[0] });

  // Buy tickets using the approved tokens (without sending Ether)
  contract.methods.buyTickets(numTickets).send({ from: accounts[0] })
    .on("transactionHash", (hash) => {
      console.log("Transaction hash:", hash);
    })
    .on("confirmation", (confirmationNumber, receipt) => {
      console.log("Transaction confirmed:", confirmationNumber, receipt);
    })
    .on("error", (error) => {
      console.error("Error:", error);
    });
}


// ...

buyTicketForm.onsubmit = async (event) => {
  event.preventDefault();
  const numTickets = parseInt(document.getElementById("numberOfTickets").value);

  if (!contract || !accounts || !accounts[0]) {
    console.error("No contract or account connected.");
    return;
  }

  // Fetch the ticket price from the contract
  let ticketPrice;
  try {
    ticketPrice = await contract.methods.ticketPrice().call();
  } catch (err) {
    console.error("Error fetching ticket price:", err);
    return;
  }

  // Calculate the required amount for buying tickets
  const amount = BigInt(ticketPrice) * BigInt(numTickets);

  // Buy tickets
  try {
    console.log("Buying tickets...");
    await buyTickets(numTickets);
    console.log("Tickets bought successfully.");
  } catch (err) {
    console.error("Error while buying tickets:", err);
  }
};

