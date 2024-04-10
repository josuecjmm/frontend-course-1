import Login from "./components/Login";
import getUserFromLocalStorage from './hooks/useLocalStorage'
import CountriesList from './components/countries/Countries'

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12">
          {getUserFromLocalStorage.token? 
          <CountriesList/> :
          <Login/>  
        }
        </div>
      </div>
    </div>
  )
}

export default App
