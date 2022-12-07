import React from "react";
import {connect} from "react-redux"
import styles from "./Favorites.module.css"
function Favorites({myFavorites}) {
    return (
        <>
            <div className={styles.container}>
                {myFavorites.map(char => (
                    <div key={char.id}>
                     <img src={char.image} className={styles.img}/>
                    <div className={styles.name}>{char.name}</div>
                    </div> 
                ))}
            </div>
        </>
    )
}
export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);