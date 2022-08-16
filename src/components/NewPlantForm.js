import React, {useState} from "react";

const initialForm = {
  name: "",
  image: "",
  price: "",

}

function NewPlantForm({onAddPlant}) {
const [formData, setFormData] = useState(initialForm)

const handleOnChange = (e) => {
  const {name, value} = e.target;

  setFormData(formData => {
    return {
      ...formData,
      [name]: value
    }
  })
  }

const handleSubmit = (e) => {
  e.preventDefault()

  const newPlant = {
    ...formData}

    fetch("http://localhost:6001/plants", {
      method: "POST",
       headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify(newPlant)
  })

      .then(res => res.json())
      .then(onAddPlant)

  };





  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onChange={handleOnChange} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );

}

export default NewPlantForm;
