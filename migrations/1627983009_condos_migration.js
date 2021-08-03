/**
  * Migration file:  Condos contract
  *
*/
let Condos = artifacts.require("Condos.sol");
module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Condos);
};
