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

#### afetr this you can go back to main page using Home button

#### Screenshots of application


<img width="959" alt="s1" src="https://user-images.githubusercontent.com/87648470/171491150-b18ee06d-b4aa-45e4-871d-eafbe638aff9.png">

<img width="953" alt="s2" src="https://user-images.githubusercontent.com/87648470/171491198-a165eb81-c660-4aed-9857-710f948f8be6.png">

<img width="955" alt="s3" src="https://user-images.githubusercontent.com/87648470/171491213-e8d9098e-80f2-4065-9839-3f422f4174b4.png">


<img width="960" alt="s4" src="https://user-images.githubusercontent.com/87648470/171491221-e123a0bd-56bc-4467-b15f-2f71e7f9bf60.png">



####
