import {useState} from "react";
import "./todoinput.css";
 function TodoInput({fudata}){
     const [text,setText]= useState("");
     return (
         <div className="inputContainer">
             <input onChange={(e)=>{
                setText(e.target.value);
             }} type="text" value={text} placeholder="Enter Todo"/>
             <button onClick={()=>{
                 fudata(text)
                 setText("")
             }} >
                 +
             </button>
         </div>
     )
 }
export {TodoInput};