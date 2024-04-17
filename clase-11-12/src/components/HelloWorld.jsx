import { useState } from "react";
import "./HelloWorld.css"

const styles = {
    color: "white",
    marginTop: '20%',
    marginLeft: '10%'
}

function HelloWorld() {
    // generar un estado basico o inicial
    const [hello, setHello] = useState('')
    const [count, setCount] = useState(0)

    function onChangeHello(e) {
        if(e.target.value.length < 1) {
            setHello('')
        }
        if(e.target.value.length > 2) {
            setHello(e.target.value)
        }
    }

    function onClickButton() {
        setCount(count + 1)
    }

    return (
        <div className="mb-3" style={styles}>
            <h1>Hello {hello} clicked {count} times!</h1>
            <input onChange={onChangeHello} className="form-control" placeholder="Say Hi!"></input>
            <button onClick={onClickButton} className="btn btn-danger">Count {count}</button>
        </div>
    )
}

export default HelloWorld; 