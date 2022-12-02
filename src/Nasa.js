import React, {useState, useEffect} from "react";
function Nasa(props){

    const {nasa_obj}=props;

    return (
    <div className="photo">
        <div className="photoImg">
        <img src={nasa_obj.hdurl} alt="Resim Geliyor"></img>
        </div>
        <div className="photoInfo">
            <h2>{nasa_obj.title}</h2>
            <div>{nasa_obj.date}</div>
            <p>{nasa_obj.explanation}</p>
        </div>
    </div>
    );
}

export default Nasa;
