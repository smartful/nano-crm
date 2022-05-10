import React, { useState } from "react";
import { address } from "../types";

export interface AddressFormProps {
  addAddress: (newAddress: address) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ addAddress }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newAddress: address = {
      name,
      email,
    };

    addAddress(newAddress);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name : </label>
      <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <label htmlFor="email">E-mail : </label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddressForm;
