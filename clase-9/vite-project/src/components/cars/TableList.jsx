function TableList(props) {
    if(props.carList.length < 1) {
        return (
            <h1 className="text-danger">Cannot load list of cars</h1>
        )
    } else {
        return (
            <>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.carList.map(car => {
                            return (
                                <tr class="table-info">
                                    <td>{car.made}</td>
                                    <td>{car.model}</td>
                                    <td>{car.type}</td>
                                </tr>
                            )
                        })}
    
                    </tbody>
                </table>
            </>
        )
    }
  
}

export default TableList; 