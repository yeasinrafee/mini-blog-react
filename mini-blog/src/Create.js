
const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <lebel>Blog title: </lebel>
                <input
                    type='text'
                    required
                />
                <lebel>Blog body: </lebel>
                <textarea 
                    required
                ></textarea>
                <lebel>Blog author: </lebel>
                <select>
                    <option value ="mario">mario</option>
                    <option value ="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;