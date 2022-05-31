import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
    // ocde is parsed continent code
    const {code} =props.match.params
    const [listapi, setListapi] = useState([]);
    const [countrieslist, setCountrieslist] = useState([])

    const getUsers = async () => {
      // API calling for listing out countries
      const listapi = await fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
          query {
            continent(code: "${code}") {
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
        console.log(data.data.continent.countries)
        setCountrieslist(data.data.continent.countries)
      })
  
      setListapi(listapi);
      console.log(listapi);
    };
  
    useEffect(() => {
         getUsers();
    }, []);
  
  return (
    <div>
      <h3>Country Details</h3>
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

         {countrieslist?.map((continent) => {
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