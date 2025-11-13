import { memo } from "react";
function SearchInput({ search, handleChange }) {
  console.log("rerenderInput");
  return <input value={search} onChange={handleChange} />;
}

export default memo(SearchInput);
