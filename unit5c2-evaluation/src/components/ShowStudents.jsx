import{useState,useEffect} from "react";
export const ShowStudents = () => {
    const [data, setData] = useState([]);
    const [sortdata,setSortdata] =useState("");
    const [order,setOrder]=useState("");

    useEffect(() => {
      getdata();
    },[])
    async function getdata() {
      const fetchdata = await fetch(`http://localhost:8080/students`).then((d) =>
        d.json()
      );
      setData(fetchdata);
      console.log(fetchdata);
    }
    function handleorder(e){
        let a=e.target.value
        setOrder(a);
       };
    
    function  handelsort (e){
        let a=e.target.value
        setSortdata(a);
       };
    function displayData() {
        var c =sortdata;
         if(order=="asc"){
         var newarray=data.sort((a, b)=>{
             return a[c] - b[c]})
         }else{
         var newarray=data.sort((a, b)=>{
            return b[c] - a[c]})
         }
         console.log(1);
        setData(newarray)
       };
    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select onChange={handelsort}
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select onChange={handleorder}
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button onClick={()=>{
              displayData()
          }} className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
          {data.map((elem) => (
            <tr className="row">
              <td className="first_name">{elem.first_name}</td>
              <td className="last_name">{elem.last_name}</td>
              <td className="email">{elem.email}</td>
              <td className="gender">{elem.gender}</td>
              <td className="age">{elem.age}</td>
              <td className="tenth_score">{elem.tenth_score}</td>
              <td className="twelth_score">{elem.twelth_score}</td>
              <td className="preferred_branch">{elem.preferred_branch}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  };