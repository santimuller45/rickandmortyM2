import React from "react";
import {connect} from "react-redux"
import styles from "./Favorites.module.css"

function Favorites({allCharacters}) {
    return (
        <>
            <div className={styles.container}>
                {allCharacters.map(char => (
                    <div key={char.id}>
                        <img src={char.image} alt={char.id} className={styles.img}/>
                        <div className={styles.name}>{char.name}</div>
                    </div>
                ))}
            </div>
        </>
    )
}
export function mapStateToProps(state) {
    return {
        allCharacters: state.allCharacters
    }
}

export default connect(mapStateToProps,null)(Favorites);