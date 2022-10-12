import './App.css';

function App() {
  const title = "Hey, welcome to my new Blog";
  const subscribers = 90;
  const link = "https://www.google.com";


  return (
    <div className="App">
     <div className="content">
      <h1> {title} </h1>
      <p>There are {subscribers} subscribers </p>
      <a href={link}> Google </a>
      </div> 
    </div>
  );
}

export default App;
