import { Link } from "react-router-dom";
import DisplayVideo from "../main/DisplayVideo";
import "../../styles/home/homepage.css";
import HeadContent from "../head/HeadContent"
import HeadImg from "../head/HeadImg"
// import '../../styles/home/head.css'
import '../../styles/home/head.css'
import Sidebar from "./Sidebar";
import MainPage from "./Mainpage";
import { Route,Routes } from "react-router-dom";
import AddMovies from "../sidebar/AddMovies";
const HomePage = () => {
  return (
    <div className="homepage">
           <div className="head">
             <HeadImg/>
            <HeadContent/>
           </div>
      {/* <ul>
        <li><Link to='/head'>Head</Link></li>
        <li><Link to='/'>Sidebar</Link></li>
        <li><Link to='/main'>MainPage</Link></li>
      </ul> */}

      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="mainpage">
        
        <DisplayVideo/>
        <MainPage/>
      </div>

          <div>
            
          </div>

    </div>
    
  );
};

export default HomePage;
