import React, { useEffect, useState } from "react";
import "../App.css"; // ../ means go back one directory
import axios from "axios";
import { NavLink } from "react-router-dom";

function FruitsList() {
    const [fruits, setFruits] = useState([]); //no items initially
    const [links, setLinks] = useState([]);

    const fetchFruits = (url = 'http://localhost:8080/api/v1/fruits/pageable?page=0&size=20') => {
      axios.get(url).then(response => {
        const data = response.data;
        setFruits(data._embedded.fruitList);
        setLinks(data._links);
      });
    }

    // runs once when the component first renders from return html to the dom in index.html only edits the components in there
    useEffect(() => {
      fetchFruits();
    }, []);

    // UI --------------------------------------------------------------------

    return (
      <div className="parent">
        <h1 className="fruits">All Fruits</h1>
        <div className="container">
          {fruits.map((fruit) => (
            <div className="item" key={fruit._id}>
                <p>{fruit.name}</p>
                <div>
                  {/* Wraps the image in a Nav link used to navigate to pages with no loading */}
                  <NavLink to={`/name/${fruit.name}`}><img src={fruit.imageURL} alt="" style={{ width: 50, height: 50, padding: 17 }} /></NavLink>
                </div>
            </div>
            
          ))}
          
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {links.first && (
          <button onClick={() => fetchFruits(links.first.href)} className="btn">First</button>
          )}
          {links.prev && (
            <button onClick={() => fetchFruits(links.prev.href)} className="btn">Previous</button>
          )}
          {links.next && (
            <button onClick={() => fetchFruits(links.next.href)} className="btn">Next</button>
          )}
          {links.last && (
            <button onClick={() => fetchFruits(links.last.href)} className="btn">Last</button>
          )}
        </div>

      </div>
    );
}


export default FruitsList;
