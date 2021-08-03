/**
  * Migration file: OniCoin contract
  * 
*/
let OniCoin = artifacts.require("OniCoin.sol");
module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(OniCoin);
};
