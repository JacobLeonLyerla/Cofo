import React from "react";
import axios from "axios"
import "./App.css";



function App() {
 
  
  return <button onClick={()=>console.log(process.env.REACT_APP_API_KEY)} className="App">fetch</button>;
}

export default App;
