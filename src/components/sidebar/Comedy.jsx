import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const Comedy = () => {
    let [comedyM,setComedyM] = useState([])
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/movie/getmovies").then(res=>{
            console.log(res)
            setComedyM(res.data.filter(obj=>obj.mtype.includes('comedy')))
        }).catch(err=>{
            console.log(err)
        })
    },[])

    return(
        <div >
            <h2>Comedy</h2>
        <div className="genre">
            {comedyM.map(movie=>{
                return(
                    <div className="card" key={movie.mid}>
                        <Link to='/playmovie' state={movie.mvideo}  ><img src={`http://127.0.0.1:8000/${movie.mimg}`} alt="" /></Link>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Comedy;