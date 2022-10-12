

const Home = () => {
    const handleClick = ()=>{
        console.log("What is up dude!");
    }

    const handleClickAgain = (name)=>{
        console.log(`hey, ${name}`);
    }

    return ( 
        <div className="home">
            <h1>HomePage</h1>
            <button className="btn-click" onClick = {handleClick}>Click Here</button>
            <button className="btn-click" onClick = {() => handleClickAgain('Rafee')}>Click Here</button>
        </div>
     );
}
 
export default Home;