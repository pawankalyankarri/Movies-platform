import axios from "axios";
import { useEffect } from "react";
import AddMovies from "../sidebar/AddMovies";
import { Link } from "react-router-dom";
import "../../styles/sidebar/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar shadow">
      <ul>
        <li>
          <Link to="/allmovies">Movies</Link>
        </li>
        <li>
          <Link to="/addmovie">Add Movie</Link>
        </li>
        <li>
          <Link>Telugu Movies</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
