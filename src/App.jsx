import "./App.css";
import { useCallback, useState, useEffect, useMemo } from "react";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import CounterButton from "./CounterButton";

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [fullList, setFullList] = useState([]);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  useEffect(() => {
    const list = [];
    for (let i = 1; i <= 500; i++) {
      list.push({ id: i, name: `${i}` });
    }
    setFullList(list);
  }, []);

  const filteredList = useMemo(() => {
    return fullList.filter((item) => item.name.includes(search));
  }, [fullList, search]);

  return (
    <>
      <div>
        <CounterButton count={count} handleClick={handleClick} />
      </div>
      <SearchInput search={search} handleChange={handleChange} />
      <ItemList list={filteredList} />
    </>
  );
}

export default App;
