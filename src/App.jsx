import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";
import OverView from "./pages/overview/OverView.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import logoNavbar from "./assets/logo-medium.png";
import Post from "./pages/post/Post.jsx";

function App() {
  return (
    <>
      <Navigation
        img={logoNavbar}
      />
      <div className="container">
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/newpost"} element={<NewPost/>}/>
          <Route path={"/overview"} element={<OverView/>}/>
          <Route path={"/404"} element={<NotFound/>}/>
          <Route path={"/posts/:id"} element={<Post/>}/>
          {/*  <img src={logo} alt="Company logo"/>*/}
          {/*  <h1>Begin hier met het maken van jouw blog-applicatie!</h1>*/}
        </Routes>
      </div>
    </>
  )
}

export default App
