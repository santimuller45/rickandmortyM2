import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css"

export default function About() {
    return (
        <div className={styles.container}>
            <Link to="/about"/>
            <div className={styles.title}>
                <div>Rick and Morty APP</div>
                <div style={{fontSize:"50px"}}>by: Santiago Muller</div>
            </div>
            <div className={styles.text}>
                <img src="https://images6.alphacoders.com/909/thumb-1920-909641.png" alt="rick" style={{width: "38vw", border:"solid yellow"}}/>
                <p>
                    <h1>Bienvenido!</h1>
                    Esta es una aplicación en desarrollo por estudiante de soyHenry para el aprendizaje e implementacion de nuevos conceptos de la libreria de "React"
                    espero que les guste!
                </p>
            </div>
        </div>
    );
}