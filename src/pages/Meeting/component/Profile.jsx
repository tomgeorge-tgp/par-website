
import "./style/profile.css";


import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"
function Profile()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [searchText, setSearchText] = useState("");
    return(<>
          
         <div className="meeting-profile">
         <p className="meeting-profile-name">Aleena Sony</p> 
         <p className="meeting-profile-gender">Female</p> 

         <div className="meeting-profile-reading"> 
         <div className="meeting-profile-age">
         <p className="meeting-profile-reading-title">Age</p> 
         <p className="meeting-profile-reading-value">24yrs</p>
         </div>
         <div className="meeting-profile-height">
         <p className="meeting-profile-reading-title">Height</p> 
         <p className="meeting-profile-reading-value">178 cm</p>
         </div>
         <div className="meeting-profile-weight">
         <p className="meeting-profile-reading-title">Weight</p> 
         <p className="meeting-profile-reading-value">82 kg</p>
        </div>
         </div>
        <div className="meeting-profile-symptoms">
        <p className="meeting-profile-reading-title">Symptoms</p> 
         <p className="meeting-profile-reading-value">headache, nausea, throat pain</p>
        </div>
         {/* <div className="overview-device-img"> <img  src={device} alt="device" /></div> */}
         </div>
    </>);
}
export default Profile;