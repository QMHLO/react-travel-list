import React from "react";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }

  function handleClear() {
    const confirmed = window.confirm("Are you sure want to delete all items?");
    if (confirmed) setItems([]);
  }
  return (
    <div>
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItems={handleToggleItem} onClearList={handleClear} />
      <Stats items={items} />
    </div>
  );
}

export default App;
