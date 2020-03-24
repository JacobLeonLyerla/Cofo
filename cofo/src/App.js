import React from "react";
import "./App.css";

import CountryProvider, { CountryContext } from "./context/countryProvider";
function App() {
  return (
    <div>
      <CountryProvider>
        <CountryContext.Consumer>
          <button
            onClick={() => console.log(process.env.REACT_APP_API_KEY)}
            className="App"
          >
            fetch
          </button>
          ;
        </CountryContext.Consumer>
      </CountryProvider>
    </div>
  );
}

export default App;
