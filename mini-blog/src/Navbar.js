import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Rafee's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style = {{
                    color: "white",
                    backgroundColor: '#f13f6d',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;