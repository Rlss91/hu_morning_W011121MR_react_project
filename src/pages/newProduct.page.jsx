import { useState } from "react";

const NewProductPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState([]);

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };
  const handlePriceChange = (ev) => {
    setPrice(ev.target.value);
  };
  const handleDescriptionChange = (ev) => {
    setDescription(ev.target.value);
  };

  return (
    <form
      method="post"
      action="http://localhost:3001/api/products"
      enctype="multipart/form-data"
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="prudImg">Img:</label>
        <input type="file" name="prudImg" id="prudImg" />
      </div>
      <div>
        <button>Create</button>
      </div>
    </form>
  );
};

export default NewProductPage;
