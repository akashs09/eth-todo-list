var TodoList = artifacts.require("./TodoList.sol");

/* 
 add it to the manifest of deployed contracts to ensure that it 
 gets deployed when we run
 the migrations

 */
module.exports = function(deployer) {
  deployer.deploy(TodoList); 
};

