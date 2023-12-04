import express from 'express';
import keccak from "keccak"
const { Web3 } = require("web3")
require('dotenv').config();

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:6002"));
const abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
const contractInstance = new web3.eth.Contract(abi, process.env.CONTRACT_ADDRESS);

const router = express.Router();

router.get('/candidate/:name', async (req, res) => {
  try {
    const { name } = req.params
    const hash = keccak("keccak256").update(name).digest().toString("hex")
    const ethAddress = '0x' + hash
    let value = await contractInstance.methods.totalVotesFor(ethAddress).call()
    res.send({ name, address: ethAddress,  value: Number(value) });
  } catch (e: any) {
    res.send({ error: e.message })
  }
});



export default router;
