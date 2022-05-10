import React, { Fragment } from "react";
import { address } from "../types";

export interface DisplayProps {
  addressArray: address[];
}

const Display: React.FC<DisplayProps> = ({ addressArray }) => {
  return (
    <Fragment>
      {addressArray.length > 0 && (
        <ul>
          {addressArray.map((element: address) => (
            <li key={element.email}>
              {element.name} : {element.email}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default Display;
