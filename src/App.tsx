import React, { useState } from "react";
import { address } from "./types";

import AddressForm from "./components/AddressForm";

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
      {addresses.length > 0 && (
        <ul>
          {addresses.map((element: address) => (
            <li key={element.email}>
              {element.name} : {element.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
