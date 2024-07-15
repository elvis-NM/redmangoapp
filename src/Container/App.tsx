import React from 'react';
import {Header,Footer} from "../Components/Layout";
import{useState,useEffect} from "react";


function App() {
  const[menuItems,setMenuItems] =useState([]);

  useEffect(() =>{fetch("https://redmangoapi.azurewebsites.net/api/MenuItem").then((response)=>response.json()).then((data)=>{console.log(data);})})
  return (
    <div className="text-success"><Header/>Main Component<Footer/>
    </div>
  );
}

export default App;
