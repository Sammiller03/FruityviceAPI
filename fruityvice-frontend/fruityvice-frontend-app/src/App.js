import "./App.css";
import FruitDetail from "./components/fruit-detail.component";
import FruitsList from "./components/fruits-list.component";
import { Routes, Route } from "react-router-dom";


// :name is dynamic (e.g. "name/apple") to passed as a param to fruit-detail.component...
function App() {
  return (
    <Routes>
      <Route path="/all" element={<FruitsList />} />
      <Route path="/name/:name" element={<FruitDetail />} /> 
    </Routes>
  );
}


export default App;
