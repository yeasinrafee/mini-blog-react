
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Rafee's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style = {{
                    color: "white",
                    backgroundColor: '#f13f6d',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;