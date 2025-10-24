// component in react, are very similar to creating your own HTML tag.

import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
  // Hooks in react.
  // The useWallet `Hook` provides the wallet variables inside the Airdrop `Component`.
  const wallet = useWallet();
  const { connection } = useConnection();

  // Define the function inside the component body.
  async function sendAirdropToUser() {
    const amount = document.getElementById("btn").value;
    await connection.requestAirdrop(wallet.publicKey);
  }

  return (
    <div>
      <input type="text" placeholder="Amount" />
      <button onClick={sendAirdropToUser} id="btn">
        Send Airdrop
      </button>
    </div>
  );
}
