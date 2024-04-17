import axios from 'axios';
const url = import.meta.env.VITE_REACT_APP_API;

export async function PostLogin(email, password) {
    return await axios.post(
        `${url}/login`,
        {
            email,
            password
        }
    )
}

export async function PostRegister(name, email, password) {
    return await axios.post(
        `${url}/register`,
        {
            email,
            password,
            name
        }
    )
}