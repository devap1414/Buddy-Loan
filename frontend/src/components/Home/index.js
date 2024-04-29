import { Link } from "react-router-dom";

const Home = () => (
    <div>
        <h1>Hello user</h1>
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>
    </div>
)

export default Home