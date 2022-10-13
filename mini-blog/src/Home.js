import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Hola Hola Hola", body: "lorem imsum....", author: "Rafee", id: 1}, 
        {title: "This is Pred", body: "lorem imsum....", author: "Yeasin", id: 2},
        {title: "Who Wants to be a king?", body: "lorem imsum....", author: "Ragner", id: 3},
    ])

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState("Rafee");

    useEffect(() =>{
        console.log("useEffect ran");
        console.log(name);
    }, [name])

    return ( 
        <div className="home">           
            <BlogList blogs= {blogs} title = "All Blogs: " handleDelete={handleDelete}/>
            <button onClick={()=> setName("Yeasin")}>Change</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;