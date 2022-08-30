import {Container, Navbar} from 'react-bootstrap';


export default function Nav(){
    return(
        <>
            <Navbar bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">Desafio - 3</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}