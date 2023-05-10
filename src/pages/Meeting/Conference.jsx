import TitleBar from "../../components/TitleBar";
import VideoConf from "./VideoConf";
import Profile from "./component/Profile";
import Tests from "./component/Tests";
import "./style/conference.css";


import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function Conference()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
           <TitleBar/>
         <div className="conference-container">
          <VideoConf/>
         <div className="conference-container-profile">
            <Profile/>
            <Tests/>
         </div>
         <div className="conference-container-videoconf">
         </div>
         {/* <div className="overview-device-img"> <img  src={device} alt="device" /></div>
         <p className="overview-device-name">ASUSA Spectre</p> */}
         </div>
    </>);
}
export default Conference;