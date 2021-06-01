const Migrations = artifacts.require('Migrations');
const TokenCaliente = artifacts.require('TokenCaliente');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TokenCaliente, 'TokenCaliente', 'TCA', 3, 10000000000);
};
