const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const ethers = require('ethers');

// Sample whitelist data
const whitelist = [
    { index: 0, address: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", amount: "100" },
    { index: 1, address: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", amount: "200" }
];

const leaves = whitelist.map(x => 
    keccak256(ethers.solidityPacked(['uint256', 'address', 'uint256'], [x.index, x.address, x.amount]))
);

const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

console.log('Merkle Root:', root);

// Generate proof for the first user
const proof = tree.getHexProof(leaves[0]);
console.log('Proof for index 0:', proof);
