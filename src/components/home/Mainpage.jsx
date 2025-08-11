import { useEffect, useState } from "react";
import DisplayVideo from "../main/DisplayVideo";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import TeluguMovies from "../sidebar/TeluguMovies";
import '../../styles/main/mainpage.css'
// import HindiMovies from "../sidebar/HindiMovies";
// import EnglishMovies from "../sidebar/EnglishMovies";
// import TamilMovies from "../sidebar/TamilMovies";
// import OtherMovies from "../sidebar/OtherMovies";

const MainPage = () => {
    let [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/movie/getmovies").then(res=>{
            console.log(res)
            setMovies(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <main className="mainpage">            
            {movies.map(movie=>{
                return(
                    <div className="card" key={movie.mid}>
                        <Link to='/playmovie' state={movie.mvideo}><img src={`http://127.0.0.1:8000/${movie.mimg}`} alt="" /></Link>
                    </div>
                )
            })}
            <Routes>
                <Route path="/telugum" element={<TeluguMovies/>}/>
                
            </Routes>
        </main>
    )
}
export default MainPage;