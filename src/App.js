import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App (){
  return (
    <div className="App">
      <div className="container">
       
        <Weather defaultCity="San Francisco"/>
        <footer>
          This project was coded by Olha Podorozhna and is 
           <a href="https://github.com/OlgaPodorozhnaya/weather-react" target="_blank" rel="noreferrer"> open-sourced on GitHub</a>
        </footer>
      </div>
    </div> 
  )
}
