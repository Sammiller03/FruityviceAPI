import React, { useEffect, useState } from "react";
import "../App.css"; // ../ means go back one directory
import axios from "axios";
import { NavLink } from "react-router-dom";

function FruitsList() {
    const [fruits, setFruits] = useState([]); //no items initially
    const [links, setLinks] = useState([]);

    const fetchFruits = (url = 'http://localhost:8080/api/v1/fruits/pageable?page=0&size=10') => {
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
        <h1 className="text-center text-red-500 font-semibold text-3xl p-4">All Fruits</h1>
        <div className="">
          {fruits.map((fruit) => (
            <div className="item rounded-md bg-gray-200 shadow-md" key={fruit._id}>
              {/* Wraps the image in a Nav link used to navigate to pages with no loading */}
              <NavLink to={`/name/${fruit.name}`}><img src={fruit.imageURL} alt="" style={{ width: 100, height: 100, padding: 20}}/></NavLink>
              <h2 className="align-center font-medium text-xl">{fruit.name}</h2>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8 mt-6 p-4">
          {links.first && (
          <button onClick={() => fetchFruits(links.first.href)} className="rounded-sm p-4 bg-violet-300 font-semibold shadow-md">First</button>
          )}
          {links.prev && (
            <button onClick={() => fetchFruits(links.prev.href)} className="rounded-sm p-4 bg-violet-300 font-semibold shadow-md">Previous</button>
          )}
          {links.next && (
            <button onClick={() => fetchFruits(links.next.href)} className="rounded-sm p-4 bg-violet-300 font-semibold shadow-md">Next</button>
          )}
          {links.last && (
            <button onClick={() => fetchFruits(links.last.href)} className="rounded-sm p-4 bg-violet-300 font-semibold shadow-md">Last</button>
          )}
        </div>

      </div>
    );
}


export default FruitsList;
