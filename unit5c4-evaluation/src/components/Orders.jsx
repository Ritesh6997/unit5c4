import axios from "axios"
import { useEffect, useState } from "react";
export const Orders = () => {
  //  Get all data when admin logs in and populate it
  // store it in redux
  const [Data,setData]=useState([])
  useEffect(() => {
    getData();
  },[])
  async function getData() {
    axios
      .get(`http://localhost:8080/orders`)
      .then(function (response) {
        // handle success\\\
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }        
  function handlesort(e) {
    let xyz= e.target.value;
      const data = [...Data].sort((a, b) => {
        return a[xyz]>b[xyz]? 1:a[xyz]<b[xyz]?-1:0;
      })
      console.log(Data)
    setData(data);
    
  }

  return (
    <div>
      <div>
        <div>
          <select onChange={handlesort} className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>

          {Data.map((e) => (
            <tbody key={e.id}>
              <tr className="orders-row">
                <td className="id">{e.id}</td>
                <td className="problem">{e.problem}</td>
                <td className="owner">{e.owner_name}</td>
                <td className="status">{e.status}</td>
                <td className="cost">{e.cost}</td>
                <td className="change-status">
                  {
                    e.status === 
                      "Not Accepted"?""
                  :<select className="changeStatus" name="changeStatus">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                    <option value="Not Accepted">Not Accepted</option>
                  </select>
                  }
                </td>
                <td className="accept">
                  {e.status ===
                      "Not Accepted"?<button>Accept</button>:""}
                  {/* on change make request to update it in db, and show changed status in table */}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
