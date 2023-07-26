import React from "react";

function Stats({ items }) {
  if (!items.length) {
    return <p>Start Adding some items to your packlist.</p>;
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div>
      <p>
        {percentage === 100
          ? "You got everything! Ready to go"
          : `You have ${numItems} items on your list,
      and you already packed ${numPacked} (${percentage}%)`}
      </p>
    </div>
  );
}

export default Stats;
