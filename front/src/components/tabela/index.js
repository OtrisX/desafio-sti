import {Container, Table} from 'react-bootstrap';
import axios from "axios"
import { useEffect, useState } from 'react';
import styled from "styled-components"


const Wrapper = styled.div`
    margin-top: 20px;
`
const Label = styled.h1`
    text-align: center;
    font-size: 40px;
`

export default function Tabela() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9000/alunos/notas")
        .then(res => setData(res.data))
    }, [])
    
    console.log(data)
    
    return(
        <Wrapper>
            <Label>CR dos alunos</Label>
            <Container>
                <Table striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                            <th>Matricula</th>
                            <th>CR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map(e => (
                            <tr>
                                <td>{e.matricula}</td>
                                <td>{e.cr}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </Wrapper>
    )
}