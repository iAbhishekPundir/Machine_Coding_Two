import React, { useContext } from 'react'
import {NavLink} from "react-router-dom";

const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontWeight: isActive ? "600" : "400",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "purple" : "",
    textDecoration:"none"
  });
export const Header = () => {
  return (
    <>
       <div>
       <nav>
            <NavLink style ={getActiveStyle} to="/">
                All Books
            </NavLink>      
        </nav>
       </div>
    </>
  )
}
