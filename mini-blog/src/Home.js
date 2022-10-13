import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Hola Hola Hola", body: "lorem imsum....", author: "Rafee", id: 1}, 
        {title: "This is Pred", body: "lorem imsum....", author: "Yeasin", id: 1},
        {title: "Who Wants to be a king?", body: "lorem imsum....", author: "Ragner", id: 1},
    ])

    return ( 
        <div className="home">           
            <BlogList blogs= {blogs}/>
        </div>
     );
}
 
export default Home;