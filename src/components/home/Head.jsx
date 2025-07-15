import HeadContent from "../head/HeadContent"
import HeadImg from "../head/HeadImg"
import '../../styles/home/head.css'
const Head = () => {
    return (
        <header className="head">
           <HeadImg/>
            <HeadContent/>
        </header>
    )
}
export default Head