import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// use effecta
const UseEffectFetchData = () => {
  const [listapi, setUsers] = useState([]);
  const [countries, setcountries] = useState([])
  const getUsers = async () => {
    // calling api with params 
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
    .then(data => {
      console.log(data.data.continents)
      setcountries(data.data.continents)

    })
    setUsers(listapi);
    console.log(listapi);
  };

  useEffect(() => {
    getUsers();
  }, []);


  const changeMessage = (code) => {
    alert(code)
  };

  return (
    <>
      <h3>One touch point to know details about the globe</h3>

      <h4>Select from dropdown to get more details about the continent</h4>
      <div className="dropdown">
      <select className="form-select btn" aria-label="Default select example" id="continent">
        <option selected>Select A Continent</option>

        {countries?.map((continent) => {
           console.log(continent);
          const { code, name } = continent;
          return (
              //<Link to={`/country/${code}`}></Link>

            <option key={ code } onchange={() => changeMessage(code)}>{ name }</option>
          );
        })} 

      </select>
      </div>
    </>
  );
};

export default UseEffectFetchData;