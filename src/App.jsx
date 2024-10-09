import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";
import OverView from "./pages/overview/OverView.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import logoNavbar from "./assets/logo-medium.png";
import Post from "./pages/post/Post.jsx";
import TestPage from "./pages/testpage/TestPage.jsx";

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
          <Route path={"/posts/:id"} element={<Post/>}/>
          <Route path={"/test-page"} element={<TestPage/>}/>
          <Route path={"*"} element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
