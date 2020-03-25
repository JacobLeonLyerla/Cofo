import React, {Fragment} from "react";
import "./App.css";
import { Route } from "react-router-dom";

import CountryProvider, { CountryContext } from "./context/countryProvider";

import AllCountries from "./components/allCountries"

function App() {
  return (
    <div>
      <CountryProvider>
        <CountryContext.Consumer>
          {context => (<Fragment>
            <button
              onClick={() =>
                context.actions.getData(
                  "https://restcountries-v1.p.rapidapi.com/all"
                )
              }
              className="App"
            >
              fetch
            </button>
            <Route
            exact
            path="/all"
            render={()=><AllCountries context={context}/>}
            />
          </Fragment>)}
        </CountryContext.Consumer>
      </CountryProvider>
    </div>
  );
}

export default App;
