import Head from "./Head";
import Sidebar from "./Sidebar";
import FooterPage from "./FooterPage";
import MainPage from "./Mainpage";
import '../../styles/home/homepage.css'
const HomePage = () => {
    return (
        <div className="homepage">
            <Head/>
            <Sidebar/>
            <MainPage/>
            {/* <FooterPage/> */}

        </div>
    )
}

export default HomePage;