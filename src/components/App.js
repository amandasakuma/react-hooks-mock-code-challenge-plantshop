import React, {useState, useEffect} from "react";
import Header from "./Header";
import NewPlantForm from "./NewPlantForm";
import PlantPage from "./PlantPage";

function App() {
const [plants, setPlants] = useState([])

function handleNewPlant(newPlant) {
  setPlants([...plants, newPlant])
}

useEffect(() => {
  fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plants) => setPlants(plants));
}, []);



  return (
    <div className="app">
   
      <Header onSubmit={handleNewPlant} />
      <PlantPage plants={plants}/>
    </div>
  );
}

export default App;
