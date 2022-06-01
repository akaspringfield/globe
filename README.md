## Corresponding Projects

#### Country search by Continent

Select the continent from the dropdown and you will me routed to list of all countries in continent with currency, capital and local language.

#### How to use this app. Follow this steps :- 

1. clone this repo 'globe'
2. run this command- npm install && npm start
3. open this link http://localhost:3000
4. find your country of choice from continent and know more about language or currency or capital

#### apis used 

https://countries.trevorblades.com/


1st api query for getting continent list

query MyQuery {
  continents {
      name
    	code
  }
}


2nd api query for getting country in those continent

for example if we want to get details of country in asia continent we pass code of asia that is 'AS'

query MyQuery {
  continent(code: "AS") {
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

#### afetr this you can go back to main page by go back button

####
