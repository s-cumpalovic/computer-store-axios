import React from "react";
import { UserContext } from "../App";
import { useContext } from "react";

export default function UserSurnameComponent() {
  const { surname } = useContext(UserContext);
  return (
    <div>
      <h3>User's surname is: {surname}</h3>
    </div>
  );
}
