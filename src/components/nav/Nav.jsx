import React from "react";
import SearchBar from "../searchbar/SearchBar.jsx";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function Nav({onSearch}) {
    return (
        <div className={styles.nav}>
                <div>
                    <Link to="/home">
                        <div className={styles.home}>
                            HOME
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/about"> 
                        <div className={styles.about}>
                            ABOUT
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/favorites">
                        <div className={styles.fav}>
                            FAVORITES
                        </div>
                    </Link>
                </div>
                <div>
                    <SearchBar onSearch={onSearch}/>
                </div>
        </div>
    );
}