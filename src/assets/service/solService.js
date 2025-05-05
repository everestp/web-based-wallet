import axios from "axios";

function lamportsToSol(lamports) {
  return lamports / 1e9;
}

export const solBalance = async (publicKey) => {
  try {
    const response = await axios.post("https://api.devnet.solana.com/", {
      jsonrpc: "2.0",
      id: 1,
      method: "getBalance",
      params: [publicKey],
    });
    console.log("This i the responser form solbana", response);
    return lamportsToSol(response.data.result.value);
  } catch (error) {
    throw error;
  }
};

// Example usage
// to currentn  market  price o fs sol in npr

export async function getSolPriceInNpr() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids: "solana",
          vs_currencies: "inr",
        },
      }
    );
    console.log("SOL Price:", response.data.solana.inr);

    return response.data.solana.inr * 1.6;
  } catch (error) {
    console.error("Error fetching SOL price:", error);
  }
}
