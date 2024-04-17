import Login from "./components/Login";
import getUserFromLocalStorage from './hooks/useLocalStorage'
import CountriesList from './components/countries/Countries'
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";

function App() {
  const { user } = getUserFromLocalStorage();
  if (user) {
    return (
      <>  
        <NavBar />
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-12">
              <Routes>
                <Route path='/' element={<CountriesList />} />
                <Route path='/helloWorld' element={<HelloWorld />} />
              </Routes>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12">
            <Login />
          </div>
        </div>
      </div>
    )
  }

}

export default App
