
import './App.css';

function App() {
  const food="pizza";
  const age=13;
  const links=["Service","Project","About"]
  const skills=["Andriod","Blckberry","iphone","Windows Phone"]
  return (
    <><div className="App">
      
      <div>
      <h1>Mobile Operating System</h1>
        {skills.map((ele)=>{
          return <Points skill={ele}/>
        })}
      </div>
      </div>
      <div id="Navbar">
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-bakery-logo-design-template-e979c6db88d6772062e4090687c00b7e_screen.jpg?ts=1602149907"></img>
        <div>
          {links.map((ele)=>{
            return <Link link={ele}></Link>
          })}
        </div>
        <button>Contact</button> 
      </div>
      </>
  );
}
//components
function Points({skill}){
  console.log("Skills props");
  return <li className='li_ele'>{skill}</li>
}
function Link(l){
  console.log("component1");
  return <span className='links'>{l.link}</span>
  
}

export default App;
