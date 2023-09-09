import { Button, ButtonGroup, Table } from "react-bootstrap"
import { CityDto } from "../../../dto/city.dto"

type IProps = { cities: CityDto[]; setCityDto: (c: CityDto) =>void} 



export function CityList(props: IProps) {
    const {cities, setCityDto } = props
    const handleFillForm = ( city: CityDto) => {
        setCityDto(city)
    }
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Miestas</th>
                    <th>gyventoju skaicius</th>
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
                                <Button variant="danger">Salinti</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}