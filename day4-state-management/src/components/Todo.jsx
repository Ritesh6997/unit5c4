import { useState } from "react";
import { TodoInput } from "./todoInput";
import { Todoitem } from "./TodoItem";
 
function Todo(){
    const [TodoList,setTodoList]= useState([])
    const get=(data)=>{
        const obj={
            name:data,
            status:false,
        }
        console.log("data",data)
        setTodoList([...TodoList,obj]);
    }
    const statushandler=(index)=>{
        const newarr=TodoList.map((ele,i)=>{
            if (index===i){
                return{
                    ...ele,status:!ele.status
                }
            } 
            return ele;
        })
        setTodoList(newarr);
    }
    return (
        <div>
             <Todoitem Todoitems={TodoList} statushandler={statushandler}/>
            <TodoInput fudata={get}/>
           
        </div>
        
    )
    
}

export {Todo}