import { useLocation } from "react-router-dom"
import '../../styles/sidebar/allmovies.css'

const PlayMovie = () => {
    let location = useLocation()
    let movie = location.state
    console.log(movie)
    return (
        <div className="playMovie">
            <video src={`http://127.0.0.1:8000/${movie}`} autoPlay controls ></video>
        </div>
    )
}

export default PlayMovie