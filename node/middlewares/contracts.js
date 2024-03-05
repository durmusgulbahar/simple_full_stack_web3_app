const {contractAddress} = require('../constants');
const web3 = require('./web3provider');
const ABI = [{"inputs":[],"name":"decrement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"increment","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const CounterContract = new web3.eth.Contract(ABI, contractAddress);
//add wallet
module.exports = {CounterContract}; 