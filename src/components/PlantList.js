import React, {useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const [soldOut, setSoldOut] = useState(true)

  const onToggleStock = () => {
    setSoldOut(soldOut => !soldOut)
  }

  return (
    <ul className="cards">
      {plants.map(plant => {
        return <PlantCard key={plant.name} plant={plant} onToggleStock={onToggleStock} soldOut={soldOut}/>
      }) 
      }
   
      </ul>
  );
}

export default PlantList;
