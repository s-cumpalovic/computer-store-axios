import React from "react";
import { Link } from "react-router-dom";
import Router from "./Router";
function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          padding: "15px",
        }}
      >
        <nav>
          <ul>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Router />
    </div>
  );
}

export default App;
