import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SimpleFoot from "./simplefoot/SimpleFoot";

const Layout = ({cat, applyFilter, applySort}) => {


  return (
    <div>
      <Header categories={cat} onApplyFilter={applyFilter} applySort={applySort}/>
      <Outlet />
      <SimpleFoot />
    </div>
  );
};

export default Layout;
