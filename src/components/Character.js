import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
const MyStyled = styled.div`
.div {
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    background-color:black;
    width:20%;
    margin: 0 auto;
}
.div p{
    color:yellow;
    font-style:italic;
}
.name{
    font-style:italic;
}
button{
    padding:1%;
}
`
const show = ()=>{

}
const Character = (props) => { 
const {characters} = props 
console.log(characters.starships)
return  (
    <MyStyled>
    <div className="name">
        {console.log(characters.name)}
        <h1>{characters.name}</h1>
     </div>
    <div className="div"> 
        <p>Birth year: {characters.birth_year}</p>
        <p>Eye color: {characters.eye_color}</p>
        <p>Gender: {characters.gender}</p>
        <p>Hair Color: {characters.hair_color}</p>
        <p>Mass: {characters.mass}</p>
        <p>Skin Color: {characters.skin_color}</p>
    </div>
    </MyStyled>
       

    
)
}

export default Character