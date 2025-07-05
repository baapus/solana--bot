require('dotenv').config();
const bs58 = require('bs58');
const readline = require('readline-sync');
const {
  Connection,
  clusterApiUrl,
  Keypair,
  PublicKey
} = require('@solana/web3.js');

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const secret = process.env.PHANTOM_SECRET;
const keypair = Keypair.fromSecretKey(bs58.decode(secret));

console.log("🔑 Wallet loaded:", keypair.publicKey.toBase58());

const tokenAddress = readline.question("Paste token address: ");
console.log("📌 Target token:", tokenAddress);

// Sniping + auto-sell logic will come in Phase 4
