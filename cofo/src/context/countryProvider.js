import React, {Component} from "react";

import axios from "axios";

export const CountryContext = react.createContext({});

class CountryProvider extends Component {

    state = {
    }
     getData = () =>{
        axios
        .get("https://restcountries-v1.p.rapidapi.com/all",{
          headers: {
            'X-RapidAPI-Key': "OIodsvqwbCmshvxVv1Z3Nte6EXDKp1nb8Y9jsnzDUsBqZBEX0s"
          }
        })
        .then(response =>{
          console.log(response.data)
        })
        .catch(err => {
          console.log(err);
        });
        }
    
}

export default CountryProvider;