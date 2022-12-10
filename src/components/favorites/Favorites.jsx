import React from "react";
import {connect, useDispatch} from "react-redux"
import { filterCards, orderCards } from "../../redux/actions";
import styles from "./Favorites.module.css"

function Favorites({myFavorites}) {
    const dispatch = useDispatch();
    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <>
            <div className={styles.selectores}>
                <select onChange={handleOrder} style={{fontSize: "20px", fontFamily:"rickandmorty", border:"solid", width:"10vw"}}>
                    <option value="Ascendente" >Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter} style={{fontSize: "20px", fontFamily:"rickandmorty", border:"solid", width:"10vw"}}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className={styles.container}>
                {myFavorites?.map(char => (
                    <div key={char.id}>
                        <img src={char.image} alt={char.id} className={styles.img}/>
                        <div className={styles.name}>
                            {char.name}
                        </div>
                        <div className={styles.id}>
                            {char.id}
                        </div>
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