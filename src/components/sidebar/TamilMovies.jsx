import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const TamilMovies = () => {
  let [tamilM, setTamilM] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movie/getmovies")
      .then((res) => {
        console.log(res);
        setTamilM(res.data.filter((obj) => obj.mlang.includes("tamil")));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>tamil Movies</h1>

      <div className="movies">
        {tamilM.map((movie) => {
          return (
            <div className="card" key={movie.mid}>
                        <Link to='/playmovie' state={movie.mvideo}  ><img src={`http://127.0.0.1:8000/${movie.mimg}`} alt="" /></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TamilMovies;
