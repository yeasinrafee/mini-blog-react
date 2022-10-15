import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2> 404 </h2>
            <p>This page cannot be found</p>
            <Link to={'/'}>Go back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;