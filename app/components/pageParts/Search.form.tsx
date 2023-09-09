import { Button, Form } from "react-bootstrap";

type IProps = { onHandleload : (e: any) => void};
export function SearchForm(props: IProps) {
    const {onHandleload } = props;

    return (
        <Form onSubmit ={onHandleload}>
            <Form.Group className="mb-3" controlId="city">
                <Form.Label>Miesto pavadinimas</Form.Label>
                <Form.Control type="text" placeholder="Iveskite pavadinima"/>
            </Form.Group>
            <Button variant = "primary" type="submit">
                Submit
            </Button>
        </Form>
    
    );
}