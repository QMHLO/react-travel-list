import React, { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <p className="txt">What do you need for your trip?</p>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
