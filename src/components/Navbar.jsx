import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="navbar">
            <ul>
                <li><Link to="/"> Calculator  </Link></li>
                
                <li> <Link to="/length">Measurement </Link></li>
                <li><Link to="/mass"> Mass </Link> </li>
                <li> <Link to="/time"> Time</Link></li>
                <li><Link to="/byte"> Byte</Link> </li>
                <li><Link to="/temperature"> Temperature</Link></li>
                
            </ul>
        </div>
    )
}

export default Navbar;