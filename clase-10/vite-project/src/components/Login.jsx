function Login(props) {
    if(props.type === 'user') {
        return (
            <h1> Usuario no es permitido </h1>
        )
    } else {
        return (
            <>
                <form>
                    <input className="form-control p-2 mb-2" placeholder="usuario"></input>
                    <input className="form-control p-2 mb-2" placeholder="password" type="password"></input>
                    <button className={`btn btn-${props.type === 'admin' ? 'primary' : 'secondary'} mt-2`} type="submit">Ingresar {props.type}</button>
                </form>
            </>
        )
    }
}

export default Login; 