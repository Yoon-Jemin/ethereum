const { ethers } = require('ethers');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


// private key와 지갑을 생성
// const wallet = ethers.Wallet.createRandom();
// console.log('random wallet:', wallet);

// const privateKey = wallet.privateKey;
// console.log('Private key:', privateKey);

// const address = wallet.address;
// console.log('My ethereum address:', address);

// public key 생성
const privateKey = '128e4c402ee437b83a785156fd11fee0e3020cf7c6ab0f0b16ee034b7a852cfe';
const keyPair = ec.keyFromPrivate(privateKey);

const myPublicKey = keyPair.getPublic().encodeCompressed('hex');
console.log('myPublicKey:::', myPublicKey);