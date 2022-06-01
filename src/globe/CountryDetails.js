import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function CountryDetails(props) {
    const {code} =props.match.params     // code : value of continent passed from continentlist
    const [listapi, setListapi] = useState([]);   // listing from api value
    const [countrieslist, setCountrieslist] = useState([])

    const getContrydetails = async () => {
    // Calling GraphQL API with keys for getting country information
      const listapi = await fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
          query {
            continent(code: "${code}") {
              name
              countries {
                name
                currency
                capital
                languages {
                  name
                  native
                }
              }
            }
          }
        `
        })
      })
      .then(res => res.json())
      .then(data => {
        setCountrieslist(data.data.continent)
      })
      setListapi(listapi);
    };
    
    // Getting values to populate in table
    useEffect(() => {
         getContrydetails();
    }, []);
  
  return (
    <div>
      <h6>Continent Code : { code }  and Name : { countrieslist.name }</h6>

      <br/>
      <h3> Country Details</h3>
      {/* Table to list countries name currency capital and language */}
      <Link to={`/`}><button className='btn'>Home</button></Link>           
      <ul className='users'>
      <table className="table table-sm" >
      <thead>
        <tr >
          <th scope="col"> </th>
          <th scope="col" align="center">Country</th>
          <th scope="col">Currency</th>
          <td></td>
          <th scope="col">Capital</th>
          <td></td>
          <th scope="col">Language</th>
        </tr>
      </thead>          

         {countrieslist.countries?.map((continent) => {
          const { id , name, currency, capital, languages } = continent;
          return (
            <tbody>  
              <tr>
              <th scope="row" key={ id }></th>
                <td>{ name }</td>
                <td>{ currency }</td> 
                <td></td>
                <td>{ capital }</td>
                <td></td>
                {languages?.map((language) => {
                    const { name } = language;
                    return ( <td>{ name }</td> );
                })}

              </tr>
            </tbody>
          );
        })} 
      </table>
      
      </ul>
    </div>
  );
};

export default CountryDetails