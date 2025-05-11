import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../context/constants";

// GET USER BALANCE
export const getBalance = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};

// FETCH CONTRACT
const FETCH_CONTRACT = (PROVIDER) =>
  new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, PROVIDER);

// CONNECTING WITH CONTRACT
export const CALLING_CONTRACT = async (CONTRACT_ADDRESS, CONTRACT_ABI) => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const PROVIDER = provider.getSigner();

    const contract = FETCH_CONTRACT(PROVIDER);

    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const parseErrorMsg = (e) => {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
};

export const shortenAddress = (address) =>
  `${address?.slice(0, 12)}...${address?.slice(address.length - 4)}`;

// ✅ AI MODERATION FUNCTION (connects to Flask backend)
export const moderateContent = async (text) => {
  try {
    const response = await fetch("http://localhost:5000/moderate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const result = await response.json();

    if (result && result.classification === "offensive") {
      return { allowed: false, reason: "⚠️ Content flagged as offensive." };
    }

    return { allowed: true };
  } catch (error) {
    console.error("Moderation error:", error);
    return { allowed: false, reason: "❌ Error checking content." };
  }
};
