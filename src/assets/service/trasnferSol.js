import {
    Connection,
    Keypair,
    PublicKey,
    LAMPORTS_PER_SOL,
    SystemProgram,
    Transaction,
    sendAndConfirmTransaction,
    
  }  from "@solana/web3.js";
  
  import { Buffer } from "buffer";
  export async function transferSOL(recipientAddress, amountInSOL,hexsecretKey) {
    const secretKey = Uint8Array.from(Buffer.from(hexsecretKey, "hex"));
      const sender = Keypair.fromSecretKey(secretKey);
    const connection = new Connection("https://api.devnet.solana.com");
    const recipient = new PublicKey(recipientAddress);
  
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: sender.publicKey,
        toPubkey: recipient,
        lamports: BigInt(Math.floor(Number(amountInSOL) * LAMPORTS_PER_SOL))
      })
    );
  
    const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);
    console.log("✅ Transaction confirmed with signature:", signature);
  }
  
  // 👇 Example usage

  