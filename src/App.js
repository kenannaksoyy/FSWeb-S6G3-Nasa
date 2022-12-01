import React, {useState,useEffect} from "react";
import "./App.css";

function Nasa(props){
  const {id}=props;
  const [nasa, setNasa] = useState({});
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-${id}`)
      .then((res) => res.json())
      .then((res) => {
        setNasa(res);
      });
  }, [id]);
  console.log(nasa);
  return (
    <div>
      <img src={nasa.hdurl}></img>
    </div>
  );

}

function App() {
  const [id, setId] = useState(1)

  
  return (
    <div className="App">
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin
		İyi eğlenceler! <span role="img" aria-label='go!'>🚀</span>!
      </p>
    <Nasa id={id}/>
    <button onClick={()=>setId(id+1)}>Nasa id arttir</button>  
    </div>
  );
}

export default App;
