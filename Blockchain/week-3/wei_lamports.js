
/*
 * Wei --> Smallest unit of cryptocurrency in the Ethereum network. 
 * Conversion: 1Ether (ETH) --> 10^18 Wei.
 * Gwei --> A Largest unit of Ether commonly used in the context of gas prices. 
 * Conversion: 1Ether (ETH) --> 10^9 Gwei.
 * 
 * Lamports: In the solana blockchain, the smallest unit of cryptocurrency is called a lamport. Lamports are to SOL (the native of Solana).
 * Conversion: 1SOL = 10^9 Lamports. 
 * 
 */
// Use case of the Lamports. 

const {LAMPORTS_PER_SOL}  = require("@solana/web3.js")
console.log(LAMPORTS_PER_SOL);

// RPC --> Remote Procedure Call, way for external clients to interact with the blockchain network. 
// RPC server exposes an API that allows clients to send requests and receive responses from the blockchain. 
// We can grab the RPC server from one of many providers:
    // a. Quicknode. 
    // b. Alchemy. 
    // c. Helius. 
    // d. Infura.

// Common RPC calls on Solana. 
    // a. getAccountInfo().
    // b. getBalance().
    // c. getTransactionCount().

// Common RPC calls on ETH. 
    // a. getBalance().
    // b. getLatestBlock().
    // c. getBlockByNumber().

    