import axios from "axios";
import { useEffect } from "react";
import AddMovies from "../sidebar/AddMovies";
import { Link } from "react-router-dom";


const Sidebar = () => {


  return (
    <aside className="sidebar shadow">
      <li>
        <Link to='/allmovies'>Movies</Link>
      </li>
      <li><Link to='addmovie' >Add Movie</Link></li>



      
    </aside>
  );
};

export default Sidebar;
