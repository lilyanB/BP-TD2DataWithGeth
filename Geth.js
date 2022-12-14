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

  console.log("QUESTION 1 :")
  const solde = await provider.getBalance(addressFrom)
  console.log(`The balance of ${addressFrom} is: ${solde} ETH(in gwei)`);

  console.log("QUESTION 2 :")

  const lastBlock = await web3.eth.getBlockNumber()
  console.log("Latest Ethereum Block is ", lastBlock);

  const numberPeer = await web3.eth.net.getPeerCount()
  console.log("Number of peer was connected : ", numberPeer)

  
  console.log("QUESTION 3 :")

  console.log("QUESTION 4 :")
  const numberofTx = await web3.eth.getBlockTransactionCount(blockNumber)
  let arrayTX = []
  for (let i = 0; i < numberofTx; i++) {
    let transactionBlock = await web3.eth.getTransactionFromBlock(blockNumber,2)
    arrayTX[i] = transactionBlock.hash
  }
  console.log(`Number of TX in block ${blockNumber} : ${numberofTx}`);
  console.log(`List of tx : ${arrayTX}`);

  console.log("QUESTION 5 :")
  const numberofTxMempool = await web3.eth.getBlockTransactionCount("pending")
  let arrayTXmempool = []
  for (let i = 0; i < numberofTxMempool; i++) {
    let transactionBlock = await web3.eth.getTransactionFromBlock(blockNumber,2)
    arrayTXmempool[i] = transactionBlock.hash
  }
  console.log(`Number of TX in block ${blockNumber} : ${numberofTxMempool}`);
  console.log(`List of tx in mempool : ${arrayTXmempool}`);

  console.log("QUESTION 6 : ")
  const result = await provider.getTransactionReceipt(tx)
  console.log(`info of ${tx} is: ${JSON.stringify(result)}`)

  console.log("QUESTION 7 :")

  console.log("QUESTION 8 :")

  console.log("QUESTION 9 :")

};

main();