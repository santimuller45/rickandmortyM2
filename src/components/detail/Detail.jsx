import styles from "./Detail.module.css"
import { useState , useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function Detail() {

    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();
    const backToHome = () => navigate("/home");

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
            })
           .catch((erro) => {
              window.alert('No hay personajes con ese ID');
            });
        return setCharacter({});
        }, [detailId]);

    return (
        <div>
            <div className={styles.container}>
                <img src={character.image} alt={character.name}/>
                <h1>Nombre: {character.name}</h1>
                <h4>Estado: {character.status}</h4>
                <h4>Especie: {character.species}</h4>
                <h4>Género: {character.gender}</h4>
                <h4>Origen {character.origin?.name}</h4>
            </div>
            <button onClick={backToHome} className={styles.btn}>HOME</button>
        </div>
    );
}