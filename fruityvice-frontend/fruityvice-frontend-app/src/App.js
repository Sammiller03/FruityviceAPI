import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
//import fruitService from "../services/fruit.service"; //try with this later

const App = () => {

    //Logic ------------------------------------------------------------------------

    const [items, setItems] = useState([]); //no items initially
    const [dataIsLoaded, setDataIsLoaded] = useState(false); // false initially data has not loaded from api

    // runs once when the component first renders from return html to the dom in index.html only edits the components in there
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/fruits/all")
            .then((res) => { //response
                setItems(res.data); //the actual data in items now
                setDataIsLoaded(true);
            });
    }, []); // the [] means only run once

    if (!dataIsLoaded) {
        return (
            <div>
                <h1>Finding fruits...</h1>
            </div>
        );
    }

    // UI --------------------------------------------------------------------

    return (
      <div className="parent">
        <h1 className="fruits">All Fruits</h1>
        <div className="container">
          {items.map((item) => (

            <div className="item" key={item._id}>
              <li>
                  <strong>Name: {item.name}</strong>
              </li>
            </div>
            
          ))};
        </div>
      </div>
    );
};

export default App;
