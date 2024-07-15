import React from 'react';
import {Header,Footer} from "../Components/Layout";
import{useState,useEffect} from "react";
import { menuItemModel } from '../Interfaces';
import { Home } from '../Pages';


function App() {
  const[menuItems,setMenuItems] =useState<menuItemModel[]>([]);

  useEffect(() =>{fetch("https://redmangoapi.azurewebsites.net/api/MenuItem").then((response)=>response.json()).then((data)=>{console.log(data);setMenuItems(data.result)})},[])
  return (
    <div className="text-success"><Header/><Home/><Footer/>
    </div>
  );
}

export default App;
