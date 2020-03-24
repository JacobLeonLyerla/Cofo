import React from "react";
import axios from "axios"
import "./App.css";
function getData () {
  axios
  .get("https://webcamstravel.p.rapidapi.com/webcams/list/%7Bmodifier%7D?lang=en",{
    headers: {
      "x-rapidapi-host": "webcamstravel.p.rapidapi.com",
      "x-rapidapi-key": "OIodsvqwbCmshvxVv1Z3Nte6EXDKp1nb8Y9jsnzDUsBqZBEX0s"
    }
  })
  .then(response =>{
    console.log(response)
  })
  .catch(err => {
    console.log(err);
  });
  }
function App() {
  
  return <button onClick={()=>getData()} className="App">fetch</button>;
}

export default App;
