
import React from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import { ComEthFactoryAdress, ComEthFactoryAbi } from "./contracts/comEthFactory";

export const FaucetContext = React.createContext(null);

function App() {
  const comEthFactory = useContract(ComEthFactoryAdress, ComEthFactoryAbi);

  return (
    <>
      <FaucetContext.Provider value={comEthFactory}>
        <Dapp />
      </FaucetContext.Provider>
    </>
  );
}

export default App;