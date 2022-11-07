import React from "react";
import UserComponent from "./components/UserComponent";
export const UserContext = React.createContext(null);

function App() {
  return (
    <div className="App">
      <UserContext.Provider 
      value={{
        name: "Zdravo",
        surname: "Colic"
      }}
      >
        <UserComponent />
        </UserContext.Provider>
    </div>
  );
}

export default App;
