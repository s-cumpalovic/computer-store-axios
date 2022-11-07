import React from "react";
import { UserContext } from "../App";
import { useContext } from "react";

export default function UserNameComponent() {
  const { name } = useContext(UserContext);
  return (
    <div>
      <h3>User's name is: {name}</h3>
    </div>
  );
}
