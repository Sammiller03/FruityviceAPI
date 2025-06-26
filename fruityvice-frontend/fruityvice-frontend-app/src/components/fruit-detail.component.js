import React, { useEffect, useState } from "react";
import "../App.css"; // ../ means go back one directory
import axios from "axios";

function FruitDetail() {

    const [item, setItem] = useState({}) // initialize to empty object {}

    useEffect(() => {
        // inside {} is the effect.
        
        axios
            .get("http://localhost:8080/api/v1/fruits/name/Tomato")
            .then((res) => {
                setItem(res.data); // putting the data in res (response) into the items variable to print
            });
        // [] is the dependancy array how many times to run [] = once.
    }, []);

    return (
        <div className="fruit-detail-container">
            <div className="fruit-detail-item">
                <p>{item.name}</p>
                <p>{item.family}</p>
                <p>{item.order}</p>
                <p>{item.genus}</p>
                <p>{item.nutritions.calories}</p>
                <p>{item.nutritions.fat}</p>
                <p>{item.nutritions.sugar}</p>
                <p>{item.nutritions.carbohydrates}</p>
                <p>{item.nutritions.protein}</p>
            </div>
        </div>
    );
}


export default FruitDetail;
