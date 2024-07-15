import React from 'react'
import{useState,useEffect} from "react";
import { menuItemModel } from '../../../../Interfaces';
import MenuItemCard from './MenuItemCard';
import { useGetMenuItemsQuery } from '../../../../Apis/menuItemApi';
import { useDispatch } from 'react-redux';
import { setMenuItem } from '../../../../Storage/Redux/menuItemSlice';




function MenuItemList() {
    //const[menuItems,setMenuItems] =useState<menuItemModel[]>([]);
    const dispatch =useDispatch();
    const {data,isLoading} = useGetMenuItemsQuery(null);
    

  //useEffect(() =>{fetch("https://redmangoapi.azurewebsites.net/api/MenuItem").then((response)=>response.json()).then((data)=>{console.log(data);setMenuItems(data.result)})},[])
  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
      }
      },[isLoading]);

      if(isLoading){
        return<div>Loading...</div>;
      }

  return (
    <div className="container row">
      {data.result.length>0 && data.result.map((menuItem:menuItemModel,index:number)=>(<MenuItemCard menuItem={menuItem} key={index}/>))}
    </div>
  )
}

export default MenuItemList
