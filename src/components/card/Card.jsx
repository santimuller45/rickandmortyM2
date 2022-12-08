import styles from "./Card.module.css"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {addFav, deleteFav} from "../../redux/actions"
import { useState, useEffect } from "react"
import React from "react"

function Card(props) {

   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         props.deleteFav(props.id)
      } else {
         setIsFav(true)
         props.addFav(props)
      }
   }

   useEffect(() => {
      for (let i=0; i < props.allCharacters.length; i++) {
         if(props.allCharacters[i].id === props.id){
            setIsFav(true);
         }
      }
   }, [props.allCharacters]);

   return (
      <div className={styles.card}>
         <button onClick={props.onClose} className={styles.cardClose}>X</button>
         <div className={styles.fav}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
               )}
         </div>
         <img className={styles.cardImg} src={props.image} alt={props.name} />
         <Link to={`/detail/${props.id}`}>
            <h2 className={styles.cardName}>{props.name}</h2>
         </Link>
         <div className={styles.container}>
            <h2>Specie: {props.species}</h2>
            <h2>Gender: {props.gender}</h2>
         </div>
      </div>
   );

}

export function mapDispatchToProps(dispatch){
   return {
      addFav: (char) => {dispatch(addFav(char))},
      deleteFav: (id) => {dispatch(deleteFav(id))}
   }
}

export function mapStateToProps(state){
   return{
      allCharacters: state.allCharacters
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)