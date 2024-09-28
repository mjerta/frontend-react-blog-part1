import './App.css'
import logo from './assets/logo-white.png'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NewPost from "./pages/NewPost.jsx";
import NotFound from "./pages/NotFound.jsx";
import OverView from "./pages/OverView.jsx";
import Navigation from "./components/Navigation.jsx";
import logoNavbar from "./assets/logo-medium.png";
import Post from "./pages/Post.jsx";

function App() {
  return (
    <>
      <Navigation
        img={logoNavbar}
      />
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/newpost"} element={<NewPost/>}/>
        <Route path={"/overview"} element={<OverView/>}/>
        <Route path={"/404"} element={<NotFound/>}/>
        <Route path={"/posts/:id"} element={<Post/>}/>
        {/*<div className="page-container">*/}
        {/*  <img src={logo} alt="Company logo"/>*/}
        {/*  <h1>Begin hier met het maken van jouw blog-applicatie!</h1>*/}
        {/*</div>*/}
      </Routes>
    </>
  )
}

export default App
