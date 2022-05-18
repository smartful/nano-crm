import React from "react";
import { address } from "../types";

export interface DisplayProps {
  addressArray: address[];
}

const Display: React.FC<DisplayProps> = ({ addressArray }) => {
  return (
    <div className="display-addresses">
      {addressArray.length > 0 && (
        <ul>
          {addressArray.map((element: address) => (
            <li key={element.email}>
              {element.name} : {element.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Display;
