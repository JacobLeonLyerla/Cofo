import React from "react";
import "./App.css";

import CountryProvider, { CountryContext } from "./context/countryProvider";
function App() {
  return (
    <div>
      <CountryProvider>
        <CountryContext.Consumer>
          {context => (
            <button onClick={context.actions.getData} className="App">
              fetch
            </button>
          )}
        </CountryContext.Consumer>
      </CountryProvider>
    </div>
  );
}

export default App;
