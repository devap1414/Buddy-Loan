import "./index.css";
import { Link } from "react-router-dom"

const Login = () => (
    <div className ="main-div">
        <div className="img-csontainer">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="logo" />
        </div>

        <div className="container">
          <h2>Loan application login</h2>
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <div className="a">
            <div>
              <input type="checkbox" id="Remember" />
              <label htmlFor="Remember">Remember me</label>
            </div>
            <a href="google.com">forget password</a>
          </div>
          <button className="login-button" type="submit">Login</button>

          <div className="register-section">
            <p>Don't have an account?</p>
            <Link className="link" to="/register">Register</Link>
          </div>
        </div>
    </div>
)

export default Login