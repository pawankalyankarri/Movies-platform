import axios from "axios";
import { useEffect, useState } from "react";
import '../../styles/sidebar/allmovies.css'


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
    <div className="allmovies">
      {movies.map((movie) => {
        return (
          <div key={movie.mid} className="row moviesinfo">
            <div className=" imgcard col-4">
                <div className="img">
                    <img src={`http://127.0.0.1:8000/${movie.mimg}`} alt="img" /> 
                </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default AllMovies;
