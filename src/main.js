const SHA256 = require('crypto-js/sha256')
const EC = require('elliptic').ec;
const { Blockchain, Transaction } = require('./blockchain-basics');
const ec = new EC('secp256k1');
const myKey = ec.keyFromPrivate('2d25efc16ee87e9ec3b050df7e53404e10d476b1a0a911e7206347f92fbdd678');
const myWalletAddress = myKey.getPublic('hex');


// Create new instance of Blockchain class
const savjeeCoin = new Blockchain();

// Make a transaction
const tx1 = new Transaction(myWalletAddress, 'public key of recipient', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

// Mine block
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log('Balance of xavier is', savjeeCoin.getBalanceOfAddress(myWalletAddress));


// let jsChain = new Blockchain();
// console.log("Mine 1 .....");
// jsChain.addBlock(new Block("12/25/2017", {amount: 5}));
// console.log("Mine 2 ......");
// jsChain.addBlock(new Block("12/26/2017", {amount: 10}));

// console.log(JSON.stringify(jsChain, null, 4));
// console.log("Is blockchain valid? " + jsChain.checkValid());

// let savjeeCoin = new Blockchain();

// console.log('Creating some transactions...');
// savjeeCoin.createTransaction(new Transaction('address1', 'address2', 100));
// savjeeCoin.createTransaction(new Transaction('address2', 'address1', 50));

// console.log('Starting the miner...');
// savjeeCoin.minePendingTransactions('xaviers-address');
// console.log('Balance of Xaviers address is', savjeeCoin.getBalanceOfAddress('xaviers-address'));

// console.log('Starting the miner.again..');
// savjeeCoin.minePendingTransactions('xaviers-address');
// console.log('Balance of Xaviers address is', savjeeCoin.getBalanceOfAddress('xaviers-address'));

// console.log(savjeeCoin.getBalanceOfAddress('address2'));
// console.log(JSON.stringify(savjeeCoin, null, 4));