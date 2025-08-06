import axios from "axios";
import { useEffect, useState } from "react";

const AllMovies = () =>{

    let [movies,setMovies] = useState([])
    useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movie/getmovies")
      .then((res) => {
        console.log(res);
        setMovies(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
    return (
        <div>
            <h1>all movies</h1>
            {movies.map(movie=>{
                return(
                    <div key={movie.mid}>
                        <h2>{movie.mname}</h2>
                        <img src={`http://127.0.0.1:8000/${movie.mimg}`} alt="img" /> <br />
                        <video controls autoPlay >
                            <source src={`http://127.0.0.1:8000/${movie.mvideo}`} type="video/mp4"/>
                        </video>
                    </div>
                )
            })}
        </div>
    )
}

export default AllMovies