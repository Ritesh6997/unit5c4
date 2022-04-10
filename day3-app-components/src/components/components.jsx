import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.
    const handlechange=(value,key)=>{
        
        if (inv[key]<= 0 && value ===-1){
            return;
        }
        inv[key]=inv[key]+value;
        console.log(inv[key])
       setInv({
            books: inv.books,
            notebooks: inv.notebooks,
            pens: inv.pens,
        }) 
    };
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button onClick={()=>{
            handlechange(1,"books")
        }} className="circlularButton">+</button>
        <button onClick={()=>{
            handlechange(-1,"books")
        }} className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button onClick={()=>{
            handlechange(1,"notebooks")
        }} className="circlularButton">+</button>
        <button onClick={()=>{
            handlechange(-1,"notebooks")
        }}  className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick={()=>{
            handlechange(1,"pens")
        }} className="circlularButton">+</button>
        <button onClick={()=>{
            handlechange(-1,"pens")
        }} className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens}
    </div>
  );
};