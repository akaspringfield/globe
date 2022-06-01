import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// use effect
const UseEffectFetchData = () => {
  const [continentname, setContinentname] = useState('EU');
  const [continent, setContinent] = useState([])
  const getContinents = async () => {
    // calling api with keys 
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
  
  useEffect(() => {
    getContinents();
  }, []);


  const changeMessage = (codes) => {
    console.log("You Selected "+codes)
    setContinentname(codes);
    console.log("__"+continentname);
  };

  return (
    <>
      <h3>One touch point to know details about the globe</h3>
      <h4>Select from dropdown to get more details about the continent</h4><br/>

      <div className="dropdown">
        <select className="form-select " aria-label="Default select example" id="selconti">
          <option selected value = "select">Select A Continent</option>

          {continent?.map((continent) => {
            const { code, name } = continent;
            return (
              <option value = { code }>
                { name }
              </option>
            );
          })} 

        </select>
      </div>
      {console.log(">>"+continentname)}
      <Link to={`/country/${ continentname }`}>              
        <button className="btn" onClick={() => changeMessage(document.getElementById('selconti').value)}>
          SEARCH
        </button>
      </Link>
    </>
  );
};

export default UseEffectFetchData;