
import './Todoitem.css';
export const Todoitem=({Todoitems,statushandler})=>{
    console.log(Todoitems)
   return(
       Todoitems.map((ele,i)=>(
        <div className='item'>
                <div >{ele.name}{i}</div>
                <div>{ele.status}</div>
                <button className={`${ele.status ? "green" : "red"} `} onClick={()=>{
                    statushandler(i)
                }}>-</button></div>
       ))
   )
};