var axios = require('axios');
var Nebulas = require('../neb.js');

var network = 'test';
// var network = 'main';

function getAccountTransactions(address) {
    if (!Nebulas.Account.isValidAddress(address)) return null;

    return axios.get('https://explorer.nebulas.io/' + network + '/api/address/' + address);
}

module.exports = {
    getAccountTransactions: getAccountTransactions
};
