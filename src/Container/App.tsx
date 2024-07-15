import React from 'react';
import {Header,Footer} from "../Components/Layout";
import{useState,useEffect} from "react";
import { menuItemModel } from '../Interfaces';
import { Home, NotFound } from '../Pages';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
