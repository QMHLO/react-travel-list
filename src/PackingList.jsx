import React, { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItems, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div>
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} key={item.id} />
        ))}
      </ul>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">sort by input</option>
        <option value="description">sort by description</option>
        <option value="packed">sort by packed</option>
      </select>
      {sortedItems.length !== 0 && <button onClick={onClearList}>ClearList</button>}
    </div>
  );
}

export default PackingList;
