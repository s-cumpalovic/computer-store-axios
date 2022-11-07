import React, { useContext } from "react";
import { UserContext } from "../App";
import UserSurnameComponent from "./UserSurnameComponent";
import UserNameComponent from "./UserNameComponent";

export default function UserComponent() {
  const data = useContext(UserContext);
  console.log(data);
  return (
    <div>
        <h1>Users:</h1>
      <h3><UserNameComponent /></h3>
      <h3><UserSurnameComponent /></h3>
    </div>
  );
}
