import hotstar from "../../images/hotstar.webp";
const HeadContent = () => {
  return (
    <div className="head-content container mt-3 p-3">
      <div className="movie-title">
        <img src={hotstar} alt="hotstar" />
        <div className="title">
          <p className="m-name">OG </p>
          <p>Streaming from September 2nd</p>
        </div>
      </div>
      <div className="info pt-3">
        <p className="fs-6">
          OG revolves around a ruthless don named Ojas Gambheera "OG" who
          returns to Mumbai following his ten year disappearance, to kill
          another crime boss, Omi Bhau.
        </p>
      </div>
      <div className="btn">
        <a href="" className="btn btn-dark">Trailer</a>
      </div>
    </div>
  );
};

export default HeadContent;
