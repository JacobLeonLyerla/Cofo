import React, { Component } from "react";
import {  Input, Button } from "reactstrap";

import { handleChange } from "../helpers/commonHelpers";



// make it so it does not refreash everytime you search
class SeachBar extends Component {
  state = { search: "" };
  render() {
    this.handleChange = handleChange.bind(this);
   function countrySearch() {
       console.log(this.state)
    }
    return (
        <form   onSubmit={countrySearch} >
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
