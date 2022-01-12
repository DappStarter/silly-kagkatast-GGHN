require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stove radar oval history inner argue tackle gate'; 
let testAccounts = [
"0x53050b8bf1714c571bf9f55a1648a51b1d886d4d43fb7117de211dc052722b37",
"0x123abd6ad08b23116d5126b76232a310c3262171d57fa8e3305df526ae221876",
"0xbc5e17ad50a13da7fb39354348003a7708e19771e1e9fc466425299a419f7c37",
"0xa411864f8d9c26e5daf4235899278e138b8c6d14a6d783e853c5e5ecb5f2a733",
"0xa9aee9dd065513118de8275ad519bbfa0530e287320ff582e3f4ac3bbee5b29d",
"0xc5dc9ed312b3470dc3cf15e7220ca0e555259bff923cab35ca1237f4f5bbfa1b",
"0xa8f8d6cdd27756c1a6afb778d317c164abbad2e3202cdc086a6b5675156079e7",
"0x84d80dabf72687dab6065c7bf6b5691e4aa5e7d6b4e7c30e9e8bb2dc704c4c06",
"0x5f4fb8b22a80ee446e2de2c83e980efea8a8ad73d9a4b44b93f990711c0264a9",
"0xfe5e2664c41ccdc6bc571b2eeb4264d578e5038c6e143f5c52187b33ab2d4b70"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


