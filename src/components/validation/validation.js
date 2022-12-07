const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/g;

export default function validate(input) {
    const errors = {};
    if (!input.username) errors.username = "Debes ingresar un nombre de usuario...";
    if (!regexEmail.test(input.username)) errors.username = "El username debe ser un email válido";
    if (input.username.length > 35) errors.username = "El username debe tener un MAX de 35 caracteres";
    if (!regexPassword.test(input.password)) errors.password = "El password debe contener al menos un número";
    if (input.password.length < 6 && input.password.length > 10) errors.password = "El password debe tener entre 6 y 10 caracteres";
    return errors;
}