import "./App.css"
import {useState} from "react";
import { getRandomAnimal } from "./utils";
import AnimalShow from "./AnimalShow";

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  });
  return (
    <div className="app">
      <button onClick={handleClick}>Добавить животное:</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
