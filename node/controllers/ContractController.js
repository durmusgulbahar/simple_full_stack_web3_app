const web3 = require('../middlewares/web3provider');
const {contractAddress } = require('../constants');
const {ContractModel} = require('../models/ContractModel');
const CounterContract = require('../middlewares/contracts');


const getContractObject = async (req, res) => {
    const add = CounterContract.CounterContract.options.address;
    console.log(add)
    res.send(JSON.stringify(add))
}

const getBlockNumber = async (req, res) => {
    const blockNumber = await web3.eth.getBlockNumber();
    res.send(blockNumber.toString());
}

const getHome = async (req, res) => {
    res.send("Welcome to the home page");
}

const increment = async (req, res) => {
    const {connectedAccount} = req.body;
    console.log(connectedAccount)

    const txParams = {
        from: account,
        to: CounterContract.CounterContract.options.address,
        data: CounterContract.CounterContract.methods.increment().encodeABI()
    };
   
    res.sendStatus(200);
}

const decrement = async (req, res) => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const gas = await CounterContract.methods.decrement().estimateGas({from: account});
    const result = await CounterContract.methods.decrement().send({from: account, gas: gas});
    res.send(HttpStatus.OK);
}

const getValue = async (req, res) => {
    const value = await CounterContract.CounterContract.methods.getValue().call();
    res.send(JSON.stringify(value.toString()));
}

module.exports = {
    getContractObject,
    getBlockNumber,
    getHome,
    increment,
    getValue
}

