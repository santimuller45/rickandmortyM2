import styles from "./Form.module.css"
import React, { useState } from "react";
import validate from "../validation/validation";

export default function Form({login}) {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });
    const handleInputChange = (event) => {
        setUserData({...userData, 
            [event.target.name]:event.target.value});
        setErrors(
            validate({
                ...userData,
                [event.target.name]: event.target.value
            })
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }

    return (
        <>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input 
                    id="username"
                    name="username"
                    placeholder="Ingrese usuario" 
                    type="text" 
                    value={userData.username} 
                    onChange={handleInputChange}
                    />
                    <p className={styles.errors}>{errors.username}</p>
                    <br></br>
                    <label htmlFor="password">Password:</label>
                    <input 
                    id="password" 
                    name="password"
                    placeholder="Ingrese contraseña" 
                    type="password" 
                    value={userData.password} 
                    onChange={handleInputChange}
                    />
                    <p className={styles.errors}>{errors.password}</p>
                    <br></br>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
    </>
    );
}