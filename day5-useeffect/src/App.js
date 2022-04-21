import './App.css';
import {useEffect, useState} from "react";
import { Todo } from './components/todo';

function App() {
  // const [age ,setAge]= useState(0) ;
  const [counter,setCounter]=useState(0);
// useEffect(()=>{
//  console.log("useeffect 1")
// },[counter])

useEffect(()=>{
  console.log(1)
  let id =setInterval(()=>{
        setCounter((preValue)=>{
          if (preValue>=10){
            clearInterval(id)
            return 10;
          }
          return preValue+1})
  },1000);
},[])
  return (
    <div className="App">
      <Todo/>
      <div>Counter: {counter}</div>
      {/* <button onClick={()=>{
        setCounter(counter+1);
      }}>Add</button>
      <button onClick={()=>{
        setCounter(counter-1);
      }}>Add</button> */}
    </div>
  );
}

export default App;


/*
 async function getdata(){
    let data=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return data= await data.json();
  }
  setTodo([getdata()]);
      {todo.map((ele)=>{
        <div>{ele.userId}</div>
      })}
  */