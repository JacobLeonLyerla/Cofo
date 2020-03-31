import React, { Component } from "react";
import { Input, Button } from "reactstrap";

import { handleChange } from "../helpers/commonHelpers";

class SeachBar extends Component {
  countrySearch = e => {
    e.preventDefault();

    console.log(`https://restcountries-v1.p.rapidapi.com/name/${this.state.search}`);
  };
  state = { search: "" };
  render() {
    this.handleChange = handleChange.bind(this);

    return (
      <form onSubmit={this.countrySearch}>
        <Input
          type="search"
          name="search"
          id="search"
          value={this.state.search}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <Button type="submit">Sign In</Button>
      </form>
    );
  }
}
export default SeachBar;
