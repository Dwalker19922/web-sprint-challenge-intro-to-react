import React, { useState, useEffect } from 'react';
import './App.css';
import axios from'axios'
import Character from'./components/Character'


const App = () => {
  const [characters, setcharacters] = useState([]);

   useEffect(() => {
       axios
       .get("https://swapi.dev/api/people/")
       .then(res => {setcharacters(res.data)})
       
    }
   , ["https://swapi.dev/api/people/"]);
  

  return (
    <div className="App">
       {characters.map(ele => {
         console.log(characters)
         return <Character characters={ele} key={ele.name}/>
       }
       )}
    </div>
  );
}

export default App;