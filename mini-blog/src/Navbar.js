import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Mini Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style = {{
                    color: "white",
                    backgroundColor: 'rgb(66, 66, 192)',
                    borderRadius: '8px'
                }}>Add Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;