import React, { useState } from "react";
import ApiComponent from "./Component/ApiComponent";

function App() {
  const [val, setVal] = useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setVal(true)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Query</button>
      </form>
      {val===true && <ApiComponent val={val}/>}
    </>
  );
}

export default App;
