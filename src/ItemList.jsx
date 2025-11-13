import { memo } from "react";
function ItemList({ list }) {
  console.log("rerenderList");
  return (
    <>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>Элемент: {item.name}</li>;
        })}
      </ul>
    </>
  );
}

export default memo(ItemList);
