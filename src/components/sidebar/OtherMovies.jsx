import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const OtherMovies = () => {
  let [otherM, setOtherM] = useState([]);
  let remainLang = ['telugu','english','hindi','tamil']
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movie/getmovies")
      .then((res) => {
        console.log(res);
        setOtherM(res.data.filter((obj)=>{
            return remainLang.every(lang=>!obj.mlang.includes(lang))
        }))})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div >
        <h1>Other Movies</h1>
    <div className="movies">
      
      {otherM.map((movie) => {
        return (
          <div className="card" key={movie.mid}>
                        <Link to='/playmovie'  state={movie.mvideo}  ><img src={`http://127.0.0.1:8000/${movie.mimg}`} alt="" /></Link>
          </div>
        );
      })}
    </div></div>
  );
};


export default OtherMovies