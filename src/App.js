import React, {useState, useEffect} from "react";
import "./App.css";
import Nasa from "./Nasa";


const url="https://api.nasa.gov/planetary/apod?api_key=WGBtpNcTNwcwBnyZSSAtB3kesScd4cXbz4Uowx8Z";

const urlEkler=["&date=2022-11-01","&date=2022-11-30","&date=2022-11-23"];

function nasaFetcher(day) {
  const [nasa, setNasa] = useState({});
  useEffect(() => {
    fetch(`${url}${urlEkler[day-1]}`)
      .then((res) => res.json())
      .then((res) => {
        setNasa(res);
      });
  }, [day]);
  return nasa;
}

function App() {
  const [day, setDay] = useState(1);
  let nasa=nasaFetcher(day);
  
  return (
    <div className="App">
      <div className="content">

          <h1>Nasadan Günü Fotosu</h1>
          <div className="buttons">
            <button onClick={()=>setDay(1)} className={day ===1 && "selected"}>Bugün</button>
            <button onClick={()=>setDay(2)} className={day ===2 && "selected"}>Dün</button>
            <button onClick={()=>setDay(3)} className={day ===3 && "selected"}>Geçen Hafta</button>
          </div>

          {
            nasa === null ? <h3>Sayfa Yükleniyor....</h3>
            :
            (
            <Nasa nasa_obj={nasa}/>
            )
          }

      </div>
    </div>
  );
}

export default App;