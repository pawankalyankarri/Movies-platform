import DisplayVideo from "../main/DisplayVideo";
import "../../styles/home/homepage.css";
import HeadContent from "../head/HeadContent";
import HeadImg from "../head/HeadImg";
import "../../styles/home/head.css";
import MainPage from "./Mainpage";
const HomePage = () => {
  return (
    <div className="homepage ">
      <div className="head">
        <HeadImg />
        <HeadContent />
      </div>
      <div className="mainpage">
        <DisplayVideo />
        <MainPage />
      </div>

    </div>
  );
};

export default HomePage;
