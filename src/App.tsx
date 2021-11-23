import "./styles.css";
import SearchBox from "./SearchBox";
import { useCallback, useState } from "react";

export default function App() {
  const [query, setQuery] = useState(null);
  const onClick = useCallback((value) => {
    console.log(value);
    setQuery(value);
  }, []);
  return (
    <div className="App">
      <h1>React Search Box</h1>
      <SearchBox onClick={onClick} />
      <p>{query}</p>
    </div>
  );
}
