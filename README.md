# ZK Merkle Airdrop Shield

Distributing tokens to a large community can be prohibitively expensive in terms of gas. This repository utilizes a Merkle Tree architecture to allow millions of addresses to claim tokens while only requiring the developer to store a single 32-byte hash (the Merkle Root) on the blockchain.

## How it Works
1. **Off-Chain Preparation:** Collect all eligible addresses and amounts. Generate a Merkle Tree and derive the Root.
2. **On-Chain Deployment:** Deploy the contract with the Merkle Root.
3. **Claiming:** Users generate a "Merkle Proof" off-chain and submit it to the contract.
4. **Verification:** The contract hashes the user's data with the proof. If it matches the stored Root, tokens are sent.



## Core Features
* **Zero Gas Waste:** The contract doesn't store individual addresses.
* **Double-Claim Protection:** Uses a bitmask (bitmap) or mapping to ensure each index can only claim once.
* **OpenZeppelin Integrated:** Uses `MerkleProof.sol` for industry-standard security.

## Setup
1. Run the `generate-merkle.js` script with your whitelist JSON.
2. Use the outputted Root for contract deployment.
3. Distribute the Proofs to your users via an API or static site.
