import axios from 'axios';
import { useState, useEffect } from 'react'; // hooks 
import ErrorComponent from '../utils/Error';
import LoadingComponent from '../utils/Loading';

function Countries() {
           // valor        //setValor
    const [countriesList, setCountriesList] = useState([]) // para preservar valores y saber que va a hacer en el momento 
    // const [valor, setValor] = useState(declara el valor inicial acá)
     const [loading, setLoading] = useState(true) // inicie apareciendo
    const [error, setError] = useState(false) // no hay error hasta que haya error 

    const getCountriesList = async () => {
        try {
            setLoading(true) // porque ? 
            // en esta linea va a durar lo que dure 
            const response = await axios.get('https://restcountries.com/v3.1/all?fields=name')
            setCountriesList(response.data)
            setLoading(false)
            setError(false)
        } catch(e) {
            setLoading(false)
            setError(true)
        }   
    }

    // useEffect(() => {
    //     getCountriesList().then().catch()
    // }, [])// como es vacio, al inicio cargue; pero solo una vez

    // useEffect(function, arrayDeListener)
    useEffect(() => {
        getCountriesList().then().catch()
        // array vacio => cargue al inicio
        // cualquier dato dentro del array, significa recargue 
        // rendice el componente de nuevo 
    } , [])

    if (loading) {
        return (
            <LoadingComponent></LoadingComponent>
        )
    }

    if(error) {
        return (
           <ErrorComponent error={'Error loading countries'}></ErrorComponent>
        )
    }
    
    if(!error && !loading) {
        return (
            <>
                <h1>List of Countries</h1>
                <ul>
    
                    {countriesList.map((country, index) => {
                        return (
                            <li key={index}>{country.name.common}</li>
                        )
                    })}
                </ul>
            </>
    
        )
    }
   
}

export default Countries; 