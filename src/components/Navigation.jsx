import {NavLink} from "react-router-dom";
import "./Navigation.css"

function Navigation({img}) {
  return (
    <>
      <nav>
          <div className="logo">
            <img className="logo-img" src={img} alt=""/>
          </div>
        <div className="nav-container">
          <ul>
            <li>
              <NavLink
                className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
                to="/">Home</NavLink>
            </li>
            <li>
              <NavLink
                className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
                to="/overview">Alle Post</NavLink>
            </li>
            <li>
              <NavLink
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