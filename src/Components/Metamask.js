import { useState } from "react";
const Web3 = require("web3");

const Metamask = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const ethEnabled = async () => {
    if (window.ethereum) {
      setTimeout(() => {
        setLoggedIn((loggedIn) => !loggedIn);
      }, 2000);

      await window.ethereum.send("eth_requestAccounts");
      window.web3 = new Web3(window.ethereum);
      return true;
    }
    setLoggedIn(false);
    return false;
  };

  return (
    <div className="btn-container">
      {loggedIn ? (
        <h4 className="text-white mt-8">Connected to Metamask</h4>
      ) : (
        <button
          onClick={ethEnabled}
          className="mt-4 md:mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
        >
          Connect to Metamask
        </button>
      )}
    </div>
  );
};

export default Metamask;
