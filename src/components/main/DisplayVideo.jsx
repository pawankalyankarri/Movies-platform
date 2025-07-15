import '../../styles/main/displayVideo.css'
import kramp from '../../videos/kramp.mp4'
const DisplayVideo = () => {
  return (
    <div className="show-video mt-3">
      {/* <iframe
        src="https://www.youtube.com/embed/lrX7TFjBeF4?si=kJOsngeUhsr6TQJ4"
        
      ></iframe> */}
      <video autoPlay muted>
        <source  src={kramp}   />
      </video>
    </div>
  );
};

export default DisplayVideo;
