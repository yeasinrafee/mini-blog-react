import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState("Rafee");
    const [age, setAge] = useState(22);

    const handleClick = ()=>{
        setName("Yeasin");
        setAge(20);
    }


    return ( 
        <div className="home">
            <h1>HomePage</h1>
            <p>{`${name} is ${age} years old.`}</p>
            <button className="btn-click" onClick = {handleClick}>Click Here</button>
        </div>
     );
}
 
export default Home;