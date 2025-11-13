import { memo } from "react";
function CounterButton({ count, handleClick }) {
  console.log("rerenderButton");
  return (
    <>
      <button onClick={handleClick}>Счётчик: {count}</button>
    </>
  );
}

export default memo(CounterButton);
