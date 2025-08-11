import axios from "axios";
import { useEffect } from "react";
import AddMovies from "../sidebar/AddMovies";
import { Link } from "react-router-dom";
import "../../styles/sidebar/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar shadow">
      <ul className="outerul">
        <li>
          <Link to="/allmovies">Movies</Link>
        </li>
        <li>
          <Link to="/addmovie">Add Movie</Link>
        </li>
        <li className="langli">
          Languages
          <ul className="langul">
            <li><Link to='/telugumovies'>Telugu Movies</Link></li>
            <li><Link to='/hindim' >Hindi Movies</Link></li>
            <li><Link to='/englishm' >English Movies</Link></li>
            <li><Link to='/tamilm' >Tamil Movies</Link></li>
            <li><Link to='/otherm' >Other Movies</Link></li>
          </ul>
        </li>
        <li className="genreli">
          Genre
          <ul className="genreul">
            <li>
              <Link to='/comedy' >Comedy</Link>
            </li>
            <li>
              <Link to='/action'  >Action</Link>
            </li>
            <li>
              <Link to='/drama' >Drama</Link>
            </li>
            <li>
              <Link to='thriller' >Thriller</Link>
            </li>
            <li>
              <Link to='/combination' >Combination</Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
