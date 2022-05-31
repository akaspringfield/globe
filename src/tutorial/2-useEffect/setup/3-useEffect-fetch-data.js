import React, { useState, useEffect } from 'react';

// second argument
const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {

    const users = await fetch('https://countries.trevorblades.com/', {
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
      //   .foreach(continents => {
      //   option.value = continents.code
      //   option.innerText = continents.name
      //   continentSelect.append(option)
      // })
      //)
    })
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>Continent</h3>
      <ul className='users'>
         {/* {users.map((continent) => {
          const { id , name } = continent;
          //console.log("this is"+continent)
          return (
            <li key={ id }>
              <h4>{ name }</h4>
              <button>Select</button>              
            </li>
          );
        })}  */}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
