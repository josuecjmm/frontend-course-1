import axios from 'axios';
import { useState, useEffect } from 'react';
import ErrorComponent from '../utils/Error';
import LoadingComponent from '../utils/Loading';

function Countries() {
           // valor        //setValor
    const [countriesList, setCountriesList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

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

    useEffect(() => {
        getCountriesList().then().catch()
    }, [])// como es vacio, al inicio cargue; pero solo una vez

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
    
                    {countriesList.map(country => {
                        return (
                            <li>{country.name.common}</li>
                        )
                    })}
                </ul>
            </>
    
        )
    }
   
}

export default Countries; 