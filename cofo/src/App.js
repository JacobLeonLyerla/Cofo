import React, { Fragment } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import CountryProvider, { CountryContext } from "./context/countryProvider";

import SearchBar from "./components/searchBar";
import AllCountries from "./components/allCountries";
import SingleCounty from "./components/singleCountry";
function App() {
  return (
    <div className="App">
      <CountryProvider>
        <CountryContext.Consumer>
          {(context) => (
            <Fragment>
              <SearchBar context={context} />
              <Link to="/all">fetch</Link>
              <Route
                exact
                path="/all"
                render={() => <AllCountries context={context} />}
              />
              <Route
                exact
                path="/country/:country"
                render={(props) => (
                  <SingleCounty context={context} {...props} />
                )}
              />
            </Fragment>
          )}
        </CountryContext.Consumer>
      </CountryProvider>
    </div>
  );
}

export default App;
