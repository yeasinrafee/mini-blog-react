import {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Hola Hola Hola", body: "lorem imsum....", author: "Rafee", id: 1}, 
        {title: "This is Pred", body: "lorem imsum....", author: "Yeasin", id: 1},
        {title: "Who Wants to be a king?", body: "lorem imsum....", author: "Ragner", id: 1},
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog-preview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
            
        </div>
     );
}
 
export default Home;