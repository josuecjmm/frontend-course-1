import HelloWorld from "./components/HelloWorld"
import Login from "./components/Login";
import TableList from "./components/cars/TableList";
import Countries from "./components/countries/Countries";

const headers = ['Marca', 'Modelo', 'Tipo']
const carList = [
  {
    made: 'Mazda',
    model: '3',
    type: 'Gasoline'
  },

  {
    made: 'Chevrolet',
    model: 'Colorado',
    type: 'Diesel'
  },
  {
    made: 'Volkswagen',
    model: 'ID4',
    type: 'Electric'
  },
]

const styles = {
  marginLeft: '10%',
  marginRight: '10%',
  marginTop: '10%'
}

function App() {
  const logged = true;
  return (
    <div style={styles}>
      {logged ?
        <>
          <HelloWorld name="Pablito"></HelloWorld>
          <TableList headers={headers} carList={carList} />
          <Countries></Countries>
        </>
        :
        <Login type="client"></Login>
      }
    </div>
  )
}

export default App
