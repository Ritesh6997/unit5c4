import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState } from "react";
function App() {
  const [togglechange,setTogglechange] = useState(true);
  function  togglestatus (){
    setTogglechange(!togglechange);
  }

  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>{togglestatus()}} > {togglechange?"AddStudent":"Table"}</button>
     
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {togglechange?<ShowStudents/>:<AddStudent/>};
    </div>
  );
}

export default App;