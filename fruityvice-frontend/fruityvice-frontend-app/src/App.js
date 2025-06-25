import "./App.css";
import FruitsList from "./components/fruits-list.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/all" element={<FruitsList />} />
      
    </Routes>
  );
}


export default App;
