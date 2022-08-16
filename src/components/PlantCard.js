import React from "react";

function PlantCard({plant, onToggleStock, soldOut}) {

  const handleToggleStock = (e) => {
    onToggleStock();
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>


      {true ? (
        <button className="primary" onClick={handleToggleStock} >In Stock</button>
      ) : (
        <button >Out of Stock</button>
      )}
      {soldOut ? (
        <button className="primary">Out of Stock</button>
      ) : (
        null
      )
      }
      {/* <button className="primary" onClick={handleToggleStock}>{soldOut ? "In Stock" : "Out of Stock"}</button> */}
      

      
    </li>
  );
}

export default PlantCard;
