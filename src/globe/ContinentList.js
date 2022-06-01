import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// Use effect function
const UseEffectFetchData = () => {
  const [continentname, setContinentname] = useState('none');   // Continent name 
  const [continent, setContinent] = useState([]);   // variable to assign continent list from API 

  const getContinents = async () => {
    // Calling GraphQL API with keys for getting continent name
    const listapi = await fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query {
          continents {
            name
            code
          }
        }
      `
      })
    })
    .then(res => res.json())
    .then(data => {setContinent(data.data.continents)}
    )
  };
  
  // Invocking use effect function
  useEffect(() => {
    getContinents();
  }, []);

  // On click function to set continent name
  const changeMessage = (codes) => {
    setContinentname(codes);
  };

  return (
    <>
      <h3>One touch point to know countries accross the globe</h3>
      <h4>Select from dropdown to get list of countries accross in different continent</h4><br/>
      <div className="dropdown">
        <select onChange={(e) =>setContinentname(e.target.value)} className="form-select " aria-label="Default select example" id="selconti">
          <option selected value = "select" >Select A Continent</option>
          {continent?.map((continent) => {
            const { code, name } = continent;
            return (
              <option value = { code } >
                { name }
              </option>
            );
          })}
        </select>
      </div>  

        {/* Select box with button hidden for false search of continent */}

        {continentname!=="none" && 
        <Link to={`/country/${ continentname }`}> 
          <button className="btn">
            SEARCH
          </button>
        </Link>
        }
    </>
  );
};

export default UseEffectFetchData;