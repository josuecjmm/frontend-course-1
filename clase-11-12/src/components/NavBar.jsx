import { Link } from "react-router-dom";

const styles = {
    position: 'static'
}


function NavBar() {
    function handleLogout() {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={styles}>
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04" aria-controls="navbarColor04" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor04">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/features">Features</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/helloWorld">Hello World</Link>
                        </li>
                    </ul>
                    <span className="ml-auto" >
                        <button className="btn btn-danger" onClick={handleLogout}>Log out</button>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;