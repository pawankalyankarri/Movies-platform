import axios from "axios";
import { useEffect } from "react";
import AddMovies from "../sidebar/AddMovies";
import { Link } from "react-router-dom";


const Sidebar = () => {
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movie/getmovies")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <aside className="sidebar">
      <li>
        <a href="#">movies</a>
      </li>
      <li><Link to='addmovie' >Add Movie</Link></li>



      
    </aside>
  );
};

export default Sidebar;
