import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import MyNav from './components/MyNav';
import Planet from './components/Planet';
import Starship from './components/Starship';
import PrevButton from './components/PrevButton';
import NextButton from './components/NextButton';
import styled from 'styled-components';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data,setData]=useState([]);
  const [choice,setChoice]=useState('people');
  const [pagenum,setPagenum]=useState(1);
  const [firstPage,setFirstPage]=useState(true);
  const [lastPage,setLastPage]=useState(false);

  useEffect(()=>{

  function fetchData(){
  axios
  .get(`https://swapi.dev/api/${choice}/?page=${pagenum}`)
  .then(res=>{
    console.log(res.data);
    setData(res.data.results);
  })
  }

  fetchData();
  },[choice,pagenum])



const StarwarsH1=styled.h1`
display: inline-block;
font-family: 'Droid', sans-serif;
padding-top: 18px;
color: #443e3e;
text-shadow: 1px 1px 5px goldenrod;
transition: transform 1000ms ease-in-out;
&:hover {
   transform: translate(20px, 15px) rotate(360deg);
}
`;

  return (
    <div className="App">
      <StarwarsH1  > Welcome to StarWars World!</StarwarsH1>
      
      <MyNav 
      setChoice={setChoice}
      />

      {choice === "people" ? <Character info={data}/> : 
       choice === "planets" ? <Planet info={data}/> :
       <Starship info={data} />}

      <div className="buttonContainer" style={{display:"flex",justifyContent:"center"}}>
      <div>
        <PrevButton 
        currentpage={pagenum}
        setPagenum={setPagenum}
        firstPage={firstPage}
        setFirstPage={setFirstPage}
        setLastPage={setLastPage}/>
        {(firstPage)? <p>You are in First Page</p> : <></> }
      </div>
        <span style={{padding:"1%"}}></span>
      <div>
        <NextButton 
        currentpage={pagenum}
        setPagenum={setPagenum}
        lastPage={lastPage}
        setLastPage={setLastPage}
        setFirstPage={setFirstPage}/>
        {(lastPage)? <p>...May the Force be with you !</p> : <></> }
      </div>  
      </div>
    </div>
  );
}

export default App;
