import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants}) {
// const [search, setSearch] = useState("")



// function handleSearch() {
//   return plants.filter((plant) => {
//     plant
//   })
  

// }



  return (
    <main>
      <NewPlantForm />
      <Search 
      // handleSearch={handleSearch}
      />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
