const express = require('express');
const router = express.Router();

const {getContractObject, getBlockNumber,getHome,increment,getValue} = require('../controllers/ContractController');
router.get('/',getHome)
router.get('/getContractObject', getContractObject);
router.get('/getBlockNumber', getBlockNumber);
router.post('/increment',increment);
router.get('/getValue',getValue);
//router.post('/decrement',null);
module.exports =  router;