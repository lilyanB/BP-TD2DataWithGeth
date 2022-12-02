const ethers = require('ethers');
const providerRPC = {
  goerli: {
    name: 'goerli',
    rpc: 'http://127.0.0.1:8545',
    chainId: 5,
  },
};
const provider = new ethers.providers.StaticJsonRpcProvider(
  providerRPC.goerli.rpc,
  {
    chainId: providerRPC.goerli.chainId,
    name: providerRPC.goerli.name,
  }
);


var Web3 = require('web3');
var provider2 = 'http://127.0.0.1:8545';
var web3Provider = new Web3.providers.HttpProvider(provider2);
var web3 = new Web3(web3Provider);
// 2. Create address variables
const addressFrom = '0x607Ec1a7F093801b40DaE21131dDAdB8ce991106';
const AaveContract = '0x1ca525Cd5Cb77DB5Fa9cBbA02A0824e283469DBe';
blockNumber = 8017276;
tx = "0x78482d3e5b5c3f4fd73df433343ab83160a90af8a0aaa25259c3117965af5d3d";


const main = async () => {
  const infoBlock = await provider.getBlockWithTransactions(blockNumber);

  //console.log("QUESTION 4 :")
  //console.log(`Info in block number ${blockNumber} : ${JSON.stringify(infoBlock)}`);

  const solde = await provider.getBalance(addressFrom)
  console.log("QUESTION 1 :")
  console.log(`The balance of ${addressFrom} is: ${solde} ETH(in gwei)`);

  const listPeer = await web3.eth.net.getPeerCount()
  console.log("QUESTION 2 :")
  console.log("List Peer Connected : ", listPeer)


  const lastBlock = await web3.eth.getBlockNumber()
  console.log("Latest Ethereum Block is ", lastBlock);

  const numberPeer = await web3.eth.net.getPeerCount()
  console.log("Number of peer was connected : ", numberPeer)

  
  console.log("QUESTION 3 :")

  const transactionBlock = await provider.getBlockWithTransactions(blockNumber)
  console.log("QUESTION 4 :")
  //console.log(`Info in block number ${blockNumber} : ${JSON.stringify(result)}`);

  const lisTXMempool = await web3.eth.getPendingTransactions()
  console.log("QUESTION 5 :")
  console.log("Mempool : ", lisTXMempool)

  const result = await provider.getTransaction(tx)
  console.log("QUESTION 6 : ")
  console.log(`info of ${tx} is: ${JSON.stringify(result)}`)

  console.log("QUESTION 7 :")

  console.log("QUESTION 8 :")

  console.log("QUESTION 9 :")

};

main();