import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
    </div>
  );
};

export default App;
