import React from 'react'

function AllCountries(props){
 
function renderAll(){
   if (props.context.countryData.countries.length <1 || !props.context.countryData.countries) {
      props.context.actions.getData("https://restcountries-v1.p.rapidapi.com/all")
    }  
    const countries = props.context.countryData.countries;
return countries.map(country => (
    <div>{country.name}</div>
))

}

    return renderAll()
}
export default AllCountries