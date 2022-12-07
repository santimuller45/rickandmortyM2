import React from 'react';
import styles from './searchBar.module.css';
import { useState } from 'react';
export default function SearchBar(props) {
   const {onSearch} = props;
   const [character, setCharacter] = useState("");
   const handleChange = (event) => {
      setCharacter(event.target.value);
   }
   return (
      <div className={styles.searchBar}>
         <input type='search' value={character} onChange={handleChange} />
         <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
