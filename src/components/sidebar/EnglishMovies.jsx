import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const EnglishMovies = () => {
  let [englishM, setEnglishM] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movie/getmovies")
      .then((res) => {
        console.log(res);
        setEnglishM(res.data.filter((obj) => obj.mlang.includes("english")));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
    <h1>English Movies</h1>

    <div className="movies">
      {englishM.map((movie) => {
        return (
          <div className="card" key={movie.mid}>
                        <Link to='/playmovie' state={movie.mvideo}  ><img src={`http://127.0.0.1:8000/${movie.mimg}`} alt="" /></Link>
          </div>
        );
      })}
    </div></div>
  );
};

export default EnglishMovies