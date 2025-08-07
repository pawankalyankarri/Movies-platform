const PlayMovie = (props) => {
    console.log(props.mvideo)
    return (
        <div>
            <video src={`http://127.0.0.1:8000/${props.mvideo}`} autoPlay controls ></video>
        </div>
    )
}

export default PlayMovie