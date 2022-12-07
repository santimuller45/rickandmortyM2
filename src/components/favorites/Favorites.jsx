import React from "react";
import {connect} from "react-redux"
import styles from "./Favorites.module.css"
import Card from "../card/Card";

function Favorites({myFavorites}) {
    return (
        <>
            <div className={styles.container}>
                {myFavorites.map(char => (
                    <div key={char.id}>
                        <Card
                            id = {char.id}
                            name= {char.name}
                            image= {char.image}
                            gender= {char.gender}
                            species= {char.species}
                        />
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