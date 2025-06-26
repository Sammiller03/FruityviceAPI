import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "../App.css"; // ../ means go back one directory
import axios from "axios";

function FruitDetail() { // removed {name} from here passed as props which i wasnt doing originally  
    const { name } = useParams();
    const [item, setItem] = useState({
        nutritions: {} // need this extra because fruits contain an object nutritions
        // nothing shows up until the data arrives instead of React crashing bcs not know about nutritions..
    }) // initialize to empty object {}

    useEffect(() => {
        if (!name) return;
        // inside {} is the effect.
        axios
            .get(`http://localhost:8080/api/v1/fruits/name/${name}`)
            .then((res) => {
                setItem(res.data); // putting the data in res (response) into the items variable to print
            });
        // [] is the dependancy array how many times to run [] = once.
    }, [name]);

    return (
        <div className="fruit-detail-container">
            <div className="fruit-detail-item">
                <p>Name: {item.name}</p>
                <p>Family: {item.family}</p>
                <p>Order: {item.order}</p>
                <p>Genus: {item.genus}</p>
                <p>Calories: {item.nutritions.calories}</p>
                <p>Fat: {item.nutritions.fat}</p>
                <p>Sugar: {item.nutritions.sugar}</p>
                <p>Carbohydrates: {item.nutritions.carbohydrates}</p>
                <p>Protein: {item.nutritions.protein}</p>
            </div>
        </div>
    );
}


export default FruitDetail;
