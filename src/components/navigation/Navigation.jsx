import {NavLink} from "react-router-dom";
import "./Navigation.css"
import React from "react";

function Navigation({img}) {

  const [isOpen, setIsOpen] = React.useState("");

  return (
    <>
      <nav>
        <div className="logo">
          <img className="logo-img" src={img} alt=""/>
        </div>
        <div className={"hamburger"}
             onClick={() => {
               isOpen === "show-menu" ? setIsOpen("") : setIsOpen("show-menu")
             }
             }>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={"nav-container"}>
          <ul className={`nav-container ${isOpen ? "show-menu" : ""}`}>
            <li>
              <NavLink
                onClick={() => isOpen === "show-menu" ? setIsOpen("") : setIsOpen("show-menu")}
                className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
                to="/">Home</NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => isOpen === "show-menu" ? setIsOpen("") : setIsOpen("show-menu")}
                className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
                to="/overview">Alle Post</NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => isOpen === "show-menu" ? setIsOpen("") : setIsOpen("show-menu")}
                className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
                to="/newpost">Nieuwe post maken</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation;