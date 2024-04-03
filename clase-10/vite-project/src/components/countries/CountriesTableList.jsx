function TableList(props) {
    if (props.carList.length < 1 || !props.headers) {
        return (
            <h1 className="text-danger">Cannot load list of cars</h1>
        )
    } else {
        return (
            <>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            {props.headers.map(header => {
                                return (
                                    <th scope="col">{header}</th>
                            )
                            })}
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