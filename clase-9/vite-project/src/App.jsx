import HelloWorld from "./components/HelloWorld"
import Login from "./components/Login";
import TableList from "./components/cars/TableList";

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
function App() {
  const logged = true;
  return (
    <div style={{
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '10%'
    }}>
      {logged ?
        <>
          <HelloWorld name="Pablito"></HelloWorld>
          <TableList carList={carList} />
          <TableList carList={carList} />
        </>
        :
        <Login type="client"></Login>
      }
    </div>
  )
}

export default App
