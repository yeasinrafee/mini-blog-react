import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <lebel>Blog title: </lebel>
                <input
                    type='text'
                    required
                    value = {title}
                    onChange= {e => setTitle(e.target.value)}
                />
                <lebel>Blog body: </lebel>
                <textarea 
                    required
                    value = {body}
                    onChange= {e => setBody(e.target.value)}
                ></textarea>
                <lebel>Blog author: </lebel>
                <select
                    value = {author}
                    onChange = {e => setAuthor(e.target.value)}
                >
                    <option value ="mario">mario</option>
                    <option value ="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;