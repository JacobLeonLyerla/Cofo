import React, {Fragment} from "react";
import "./App.css";
import { Route,Link } from "react-router-dom";

import CountryProvider, { CountryContext } from "./context/countryProvider";

import AllCountries from "./components/allCountries"

function App() {
  return (
    <div className="App">
      <CountryProvider>
        <CountryContext.Consumer>
          {context => (<Fragment>
            <Link
              onClick={() =>
                context.actions.getData(
                  "https://restcountries-v1.p.rapidapi.com/all"
                )
              }
              to="/all"
             
            >
              fetch
            </Link>
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
