import React from "react";
import logo from "../images/profile-photo.png"

function Header() {
  return (
    <div className="header">
      <Title />   
      <Icone />     
    </div>
    
  );
}
function Title(){
  return(
    <h1 className="page-title"> Home </h1>
  )
}
function Icone(){
  return(
    <img className="top-tweets" src={logo} />
  )
}

export default Header;
