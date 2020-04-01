import React, { Component } from "react";
import { Input, Button } from "reactstrap";

import { handleChange } from "../helpers/commonHelpers";

class SeachBar extends Component {
  countrySearch = e => {
    e.preventDefault();

    this.props.context.actions.getData(
      `https://restcountries-v1.p.rapidapi.com/name/${this.state.search}`
    );
  };
  state = { search: "" };
  render() {
    this.handleChange = handleChange.bind(this);

    return (
      <form className="search-form" onSubmit={this.countrySearch}>
        <Input
          type="search"
          name="search"
          id="search"
          value={this.state.search}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <Button color="success" type="submit">search</Button>
      </form>
    );
  }
}
export default SeachBar;
