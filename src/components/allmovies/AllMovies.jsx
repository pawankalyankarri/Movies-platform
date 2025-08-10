import axios from "axios";
import { useEffect, useState } from "react";
import '../../styles/sidebar/allmovies.css'
import PlayMovie from "../main/PlayMovie";
import { Link } from "react-router-dom";


const AllMovies = () => {
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movie/getmovies")
      .then((res) => {
        console.log(res);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="allmovies mt-2">
      {movies.map((movie) => {
        return (
          <div key={movie.mid} className=" moviesinfo">
            <div className=" imgcard ">
                <div className="img">
                  <Link to='/playmovie' state={movie.mvideo}  > <img src={`http://127.0.0.1:8000/${movie.mimg}`} alt="img"  /> </Link> 
                </div>
                {/* <PlayMovie mvideo={movie.mvideo}/> */}
                <div className="m_info">
                  <button className="btn btn-primary">Watch Now</button>
                  <p><span>{movie.mdir}</span><span>{movie.mlang}</span>
                  <span>{movie.mtype}</span>
                  <span>{movie.mcont}</span></p>
                </div>
            </div>

            
          </div>
        );
      })}
    </div>
  );
};

export default AllMovies;
