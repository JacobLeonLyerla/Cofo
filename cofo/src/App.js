import React from "react";
import axios from "axios"
import "./App.css";
function getData () {
  axios
  .get("https://restcountries-v1.p.rapidapi.com/all",{
    headers: {
      "x-rapidapi-host": "estcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "OIodsvqwbCmshvxVv1Z3Nte6EXDKp1nb8Y9jsnzDUsBqZBEX0s"
    }
  })
  .then(response =>{
    console.log("did it")
  })
  .catch(err => {
    console.log(err);
  });
  }
function App() {
  
  return <button onClick={()=>getData()} className="App">fetch</button>;
}

export default App;
