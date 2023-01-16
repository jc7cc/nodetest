import Web3 from "web3";

const web3 = new Web3(process.argv[2]);

web3.eth.getBlockNumber().then(console.log).catch((err) => console.log(err));
