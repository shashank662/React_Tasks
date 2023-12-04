import React, { useState } from "react";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

function App() {
  const [isTrue, setTrue] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setTrue(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setTrue(false);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {isTrue === true && <Login />}
      {isTrue === false && <Logout />}
    </>
  );
}

export default App;
