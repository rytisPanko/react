import { Button, ButtonGroup, Table } from "react-bootstrap"
import { CityDto } from "../../../dto/city.dto"
import { createUrl } from "../../../utils/url";

type IProps = { cities: CityDto[]; setCityDto: (c: CityDto) =>void ; loadCities : () => void } 



export function CityList(props: IProps) {
    const {cities, setCityDto, loadCities } = props
    const handleFillForm = ( city: CityDto) => {
        setCityDto(city)
    }

    const handleDelete = (city: CityDto ) => {
        const isConfirmed = window.confirm("Ar tikrai norite ištrinti šį miestą?");
        if (isConfirmed) {
    fetch (createUrl ('api/cities/${city._id}'), {
        method: 'DELETE'    ,
        headers: { "Content-Type": "application/json",},
        body: JSON.stringify(city)
    }) .then (res => {loadCities()})

    

 
}
    }


    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Miestas</th>
                    <th>Gyventoju skaicius</th>
                    <th>Veiksmai</th>
                </tr>
            </thead>
            <tbody>
                {cities.map((city,key) =>(
                    <tr key={key}>
                        <td>{city.name}</td>
                        <td>{city.population}</td>
                        <td>
                            <ButtonGroup>
                                <Button variant="primary" onClick={() => handleFillForm(city)}>
                                Keisti
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(city)}> Salinti</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}