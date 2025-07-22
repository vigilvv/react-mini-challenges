import { useState } from "react";
import styles from "./SearchFilter.module.css";

const ITEMS = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Honeydew",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Raspberry",
  "Strawberry",
  "Watermelon",
];

export default function SearchFilter() {
  const [searchText, setSearchText] = useState("");

  const filteredItems = ITEMS.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item} className={styles.items}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
