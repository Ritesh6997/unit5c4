import { useContext, useState,  } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const Login = () => {
const {toggleAuth}=useContext(AuthContext)
  const [search, setSearch] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function getData(username,pass) {
    axios
      .get(`http://localhost:8080/users/?username=${username}&&pass=${pass}`)
      .then(function (response) {
        let userdetails = response.data[0];
        console.log(userdetails);
        if (userdetails === undefined)
          alert("please check the credentails")
        else {
          toggleAuth();
          if (userdetails.role === "admin") {
            navigate("/orders", { replace: true });
          } else {
            navigate("/neworder", { replace: true });
          }
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  return (
    <div>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button
        onClick={() => {
          console.log(1);
          getData(search, password);
        }}
        className="submit"
      >
        Login
      </button>
    </div>
  );
};
