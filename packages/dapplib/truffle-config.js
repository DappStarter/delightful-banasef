require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'good clock bottom solution mansion creek stick mad give arena obscure tree'; 
let testAccounts = [
"0x981601302d0dabe720468ce014e334bf3a43b2ed1cb93e940e98c7fa3b5b2100",
"0x7a4398a06655e05b0f840dd4648836d7bb3a7eee5803781dfbdea565c2698060",
"0x229dc88cd6e3237fe4311f46d76de74fd6d2e98711b981139f02bd020c97334c",
"0x81710cc3aeaffd03cb11183bd15c5fce99f299c4dd2169d1b13230d244af3b53",
"0xd2b4e1215bfb5ea50cdb9b2f4c58d8bc59e2084783f3a95bad7a531ecad33a26",
"0xaf6f2c3fc8c1f2734d284746e6e166f74bd7b3e563a9de09fbe426cc81959cc0",
"0x555739823f17a3c653f8eb256df831057ef4022e32f7f7d34b06724f13307790",
"0x3f92fb3851631cc582092a1850ec69cb33759c4b52a53c3563c8c844f69a73f7",
"0xa3c27692c341e26abd741f8173dbb2455e16fe33ed84ff4e1080b9e8c8cd0387",
"0xd82363c0c979210b8f4e087f400ff9f6960823c6b7d0e7012a36a2342b451e36"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

