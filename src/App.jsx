import React from "react";
import UserComponent from "./components/UserComponent";
export const UserContext = React.createContext(null);

function App() {
  console.log(UserContext);
  const data = { name: "Zdravo", surname: "Colic" };
  return (
    <div className="App">
      <UserContext.Provider value={data}>
        <UserComponent />
      </UserContext.Provider>
    </div>
  );
}

export default App;
