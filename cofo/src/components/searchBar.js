import React, {Component,Fragment } from "react";

import { handleChange } from "../../helpers/commonHelpers";

class SeachBar extends Component{
    state={search:''}
    render(){
        this.handleChange = handleChange.bind(this);

        return(
    <input
    type="search"
    name="search"
    id="search"
    value ={this.state.search}
    onChange={e =>{
        this.handleChange(e)}}
    
    
    />
    )}


}
export default SeachBar