import './App.css';
import {useState} from "react";
function App() {
  const [inv, setInv] = useState(0);

  const handlechange=(value,key)=>{
    if (key==="d"){
      setInv(inv*2);
      return;
    }
      setInv(inv+value);
  }
  return (
    <div className="App">
      <div>Counter <span className={`${inv}`%2===0 ? "green":"red" }>{inv}</span></div>
      <div className='btn'>
        <button onClick={()=>{handlechange(1,"a")}}>+</button>
        <button onClick={()=>{handlechange(-1,"s")}}>-</button>
        <button onClick={()=>{handlechange(-1,"d")}}>Double</button>
      </div>    
    </div>
  );
}

export default App;
