import "./index.css"
import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Registration = () => {  

  const [user_name,setuserName] = useState([])
  const [first_name,setfirstName] = useState([])
  const [last_name,setlastName] = useState([])
  const [email,setemail] = useState([])
  const [mobile,setmobile] = useState([])
  const [password,setpassword] = useState([])
  const navigate = useNavigate()
  
  const register = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3001/register",{user_name, first_name, last_name, email,mobile,password})

    .then(result =>{
      navigate("/");
      console.log(result)})
    .catch(err=>console.log(err))
  }

  return (
    <div className="main-div">
        <div className="img-container">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="logo" />
        </div>

        <div>
            <form onSubmit={register} className="form-container">
              <div className="container">
                <h2>Registrations form</h2>

                <label htmlFor="userName"><b>User Name</b></label>
                <input type="text" placeholder="Enter user name" name="userName" onChange={e => setuserName(e.target.value)} required />

                <label htmlFor="fname"><b>First name</b></label>
                <input type="text" placeholder="Enter first name" name="fname" onChange={e => setfirstName(e.target.value)} required />

                <label htmlFor="lname"><b>Last name</b></label>
                <input type="text" placeholder="Enter last name" name="lname" onChange={e => setlastName(e.target.value)} required />

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" onChange={e => setemail(e.target.value)} required />

                <label htmlFor="mobile"><b>Mobile</b></label>
                <input type="number" placeholder="Enter Mobile" name="mobile" onChange={e => setmobile(e.target.value)} required />
      
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" onChange={e => setpassword(e.target.value)} required />
                
                <button className="register-button" type="submit">Register</button>
                
                <div className="login-container">
                <p>Already have an account Login here: </p>
                  <button className="login-link" to="/"><Link className="link-login" to="/">Login</Link></button>
                  </div>
              </div>
            </form>
        </div>

    </div>
)
}
    

export default Registration