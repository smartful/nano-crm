import React, { useState } from "react";
import { address } from "./types";

import AddressForm from "./components/AddressForm";
import Display from "./components/Display";

const App: React.FC = () => {
  const [addresses, setAddresses] = useState<address[]>([]);

  const addAddress = (newAddress: address) => {
    setAddresses([...addresses, newAddress]);
  };

  return (
    <div>
      <h1>Nano CRM</h1>
      <AddressForm addAddress={addAddress} />
      <hr />
      <Display addressArray={addresses} />
    </div>
  );
};

export default App;
