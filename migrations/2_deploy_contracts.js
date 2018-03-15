var NGToken = artifacts.require("NGToken");

module.exports = function(deployer) {
	  deployer.deploy(NGToken, 210000000000, 'NG COIN', 0, 'NGC');
};
