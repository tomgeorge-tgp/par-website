 import TitleBar from "../../components/TitleBar";
import "./style/meeting.css";
// import device from "../../assets/device.png";
// import search from "../../assets/search.svg";

import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function Meeting()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
         <TitleBar/>
         <div className="meeting-start-container">
         
         <div className="meeting-start-container-header">
         <div className="meeting-start-container-header-img">

         </div>
         <div>
         <p className="meeting-start-container-header-name">Aleena Sony</p>
         <p className="meeting-start-container-header-gender">Female</p>
         </div>
         <div className="meeting-start-container-header-reading">
         <div >
         <p className="meeting-start-container-header-title">Age</p>
         <p className="meeting-start-container-header-value">24yrs</p>
         </div>
         <div>
         <p className="meeting-start-container-header-title">Height</p>
         <p className="meeting-start-container-header-value">178 cm</p>
         </div>
         <div>
         <p className="meeting-start-container-header-title">Weight</p>
         <p className="meeting-start-container-header-value">82 kg</p>
         </div>
         </div>
         </div>
        
         <div className="meeting-start-container-line"></div>
         <div className="meeting-start-container-symptoms">
         <p className="meeting-start-container-symptoms-title">Patient symptoms</p>
         <p className="meeting-start-container-symptoms-value">Headache, cold, nausea, heart pain</p>
         </div>
         <div className="meeting-start-container-line"></div>

         <div className="meeting-start-container-contacts">
         <p className="meeting-start-container-symptoms-title">Contact details</p>
         <div className="meeting-start-container-contacts-content">
         <div>
         <p className="meeting-start-container-header-title">Phone</p>
         <p className="meeting-start-container-header-value">+91 9024 953 942</p>
         </div>
         <div>
         <p className="meeting-start-container-header-title">Email</p>
         <p className="meeting-start-container-header-value">aleenasony@gmail.com</p>
         </div>
         </div>
         </div>
         <div className="meeting-start-container-btn">
         <button className="meeting-start-container-message-btn">
         Message patient
         </button>
         <button className="meeting-start-container-join-btn">
         Join appointment
         </button>
         </div>
         {/* <div className="overview-device-img"> <img  src="" alt="device" /></div>
         <p className="overview-device-name">ASUSA Spectre</p> */}
         </div>
    </>);
}
export default Meeting;