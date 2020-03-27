import React, { Component } from "react";

import { handleChange } from "../helpers/commonHelpers";

class SeachBar extends Component {
  state = { search: "" };
  render() {
    console.log(this.state);
    this.handleChange = handleChange.bind(this);
   function countrySearch() {
       console.log(this.state.search)

    }
    return (
        <form   onSubmit={()=>countrySearch()}>
      <input
      
        type="search"
        name="search"
        id="search"
        value={this.state.search}
        onChange={e => {
          this.handleChange(e);
        }}
      />
                <button type="submit">Sign In</button>

      </form>
    );
  }
}
export default SeachBar;
