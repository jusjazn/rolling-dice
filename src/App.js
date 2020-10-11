import React, { useState } from 'react';

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";

function App() {

  const [count, setCount] = useState(1);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  } 

  const rollDice = () => {
    const val = getRandomInt(6);
    setCount(val);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>They See Me Rollin'</h1>

      <DisplayDice number={count}/>
      
      <h2> {count} </h2> 
      <button onClick = {() => {
        rollDice();
      }}> THEY HATIN' </button>
      <h5> </h5>
      <img src = "https://media.tenor.com/images/48f61c755ed38f48fe07019aad407711/tenor.gif" alt="ridin' dirty" width="500" height="300"></img>

    </div>

  );
};
const DisplayDice = ( { number } ) => {

  if (number === 1){
    return <img src={image1} alt = "slide1" width="150" height="150" ></img>;
    
  } else if (number === 2){
    return <img src={image2} alt = "slide2" width="150" height="150"></img>;

  } else if (number === 3){
    return <img src={image3} alt = "slide3" width="150" height="150"></img>;

  } else if (number === 4){
    return <img src = {image4} alt = "side4" width="150" height="150"></img>;
    
  } else if (number === 5){

    return <img src = {image5} alt = "side5" width="150" height="150"></img>;

  } else if (number === 6){

    return <img src = {image6} alt = "side6" width="150" height="150"></img>;

  } else {
    return null;
  }
};

export default App;