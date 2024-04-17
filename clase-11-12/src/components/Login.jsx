import { useState } from 'react'; // hooks 
import ErrorComponent from './utils/Error';
import LoadingComponent from './utils/Loading';
import axios from 'axios';
import getUserFromLocalStorage from '../hooks/useLocalStorage';
import { PostLogin } from '../services/userService';

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false) // inicie apareciendo
    const [error, setError] = useState(false) // no hay error hasta que haya error 
    const {setUser} = getUserFromLocalStorage(); 

    const loginUser = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        const login = async () => {
            try {
                setLoading(true) 
                const response = await PostLogin(email, password)
                setUser(response.data)
                setLoading(false)
                setError(false)
                window.location.reload()
            } catch (e) {
                setLoading(false)
                setError(true)
                setEmail('')
                setPassword('')
            }
        }

        login().then().catch();
    }

    if (props.type === 'user') {
        return (
            <h1> Usuario no es permitido </h1>
        )
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-8">
                        {error ? <ErrorComponent error="Something went wrong!"/> : <></>}
                        <form onSubmit={loginUser}>
                            <input
                                className="form-control p-2 mb-2"
                                placeholder="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="form-control p-2 mb-2"
                                placeholder="password"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {loading ? <LoadingComponent/> :
                             <button className={`btn btn-${props.type === 'admin' ? 'primary' : 'secondary'} mt-2`} type="submit">Ingresar {props.type}</button>
                            }
                           
                        </form>
                    </div>
                    <span>Email Written: {email}</span>
                    <span>Password Written:  {password}</span>
                </div>
            </div>
        )
    }
}

export default Login; 