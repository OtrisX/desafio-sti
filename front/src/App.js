import { Container, Row, Col } from "react-bootstrap"
import NavBar from "./components/navbar"
import TabelaAlunos from "./components/tabela"
import TabelaCursos from "./components/tabelaCursos"

export default function App() {
  return(
    <>
      <NavBar/>
      <Container>
        <Row>
          <Col>
            <TabelaAlunos/>
          </Col>
          <Col>
            <TabelaCursos/>
          </Col>
        </Row>
      </Container>
    </>
  )
}