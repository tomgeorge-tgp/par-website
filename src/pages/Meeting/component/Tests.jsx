
import "./style/tests.css";


import {useState} from 'react';
// import {Link,Navigate,useNavigate,useLocation} from "react-router-dom"




function Tests()
{
    // const location=useLocation();
    // const navigate = useNavigate(); 
    const [tests, setTests] = useState(['Body Temperature']);
    const testNames = ["ECG", "Sp02", "Blood pressure", "ENT camera","Blood glucose","Body Temperature","Digital Stethoscope"];

    // const setList = () => {
    //     const clist = symptom_list.concat(symptom_input);
    //     if(symptom_input!="")
    //     setsymptom_list(clist);
    //   };
    
      const Test_list_card = (props) => {
        return (
          <div className="test-list-card" onClick={props.Click}>
           <p className="test-list-card-text">{props.test}</p>
          </div>
        )
      }
    
      const Test_Selected_card = (props) => {
        return (
          <div className="test-selected-card">
           <div className="test-selected-card-text">{props.test}</div>
           <button className="test-selected-card-btn"
           onClick={props.close}>X</button>
          </div>
        )
      }






    return(<>
      
         <div className="meeting-tests">
         <p className="meeting-tests-header-title">What tests do you want your patient to take?</p> 
         <div className="meeting-tests-selected">
         {tests.map((test)=>{ return(<>
            <Test_Selected_card test={test} close={() => setTests((currentTests) => currentTests.filter((currentTest) => currentTest !== test))} />

         </>)
         })} 
         </div>
         <div className="meeting-tests-line"></div>
         <div className="meeting-tests-available">
         <p className="meeting-tests-title">Tests available</p> 
         <div className="meeting-test-list">

         {testNames.map((test)=>{ return(<>
            <Test_list_card  test={test} Click={(()=>{setTests(tests.concat(test))})}/>
         </>)
         })}
         </div>
         </div>
         <div className="meeting-test-send">
          <button className="meeting-test-send-btn">Send</button>
         </div>
         </div>
    </>);
}
export default Tests;