import { useEffect } from "react";
import DisplayVideo from "../main/DisplayVideo";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import TeluguMovies from "../sidebar/TeluguMovies";

const MainPage = () => {
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/movie/getmovies").then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <main className="mainpage">
            {/* <DisplayVideo/> */}
            <h4>main page</h4>
            <p>here we need to carts</p>
            <Routes>
                <Route path="/telugum" element={<TeluguMovies/>}/>
            </Routes>
        </main>
    )
}
export default MainPage;