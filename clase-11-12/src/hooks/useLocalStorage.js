import { useState } from "react";

function getUserFromLocalStorage() {
    const getUser = () => {
        let user = localStorage.getItem('user')
        if (user) {
            // JSON.parse() => convertir json a objeto de javascript 
            user = JSON.parse(user)
        }
        return user 
    }
    // useState usa ese array de dos partes 

    //[1,2] => 1 valor, 2 function para modificar el valor => useState(3) => 3 valor inicial 
    const [user, setUser] = useState(getUser())

    const saveUser = user => {
        // JSON stringify => Convertir un objeto de js a json 
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }

    return {
        setUser: saveUser,
        user
    }
}

export default getUserFromLocalStorage; 