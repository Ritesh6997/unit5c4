import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setemployee] = useState({});
  console.log(id)
  useEffect(() => {
    console.log(1)
    axios.get(`http://localhost:8080/employee/${id}`).then(({ data }) => {
      console.log(data.data);
      setemployee(data.data);
    });
  }, [employee]);

  return (
    <div className="user_details">
      <img className="user_image" src={employee.image} />
      <h4 className="user_name">{employee.employee_name}</h4>
      <span className="user_salary">${employee.salary}</span>
      <span className="tasks">
        <li className="task">{employee.tasks}</li>
      </span>
      Status: <b className="status">{employee.status}</b>
      Title: <b className="title">{employee.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
