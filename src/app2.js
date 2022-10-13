import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// import Button from 'react-bootstrap/Button';
// lo mismo que està arriba se puede hacer como està abajo
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import NavBar from "./Components/NavBar.jsx"

function App() {
  return (
    <div className="App">
            <NavBar/>
      <header className="App-header">
        {/* fluid hace que el contenido de elemento html sea fluido en comparacion a la pantalla en la que se ve la app, VA A OCUPAR TODO EL ESPACIO! */}
        {/* <Container fluid> */}
        <Container >
          <Form>
            <Row>
              <Col md> 
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control type='email' placeholder="example@email.com" />
                  <Form.Text classNmae="text-muted">
                    We'll never share you email address!
                  </Form.Text>
                </Form.Group>
              </Col>
              {/* md optimiza el responsiv RESPONSIV!!!  */}
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type='submit'>Login</Button>
          </Form>

          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://picsum.photos/200/100" />
            <Card.Body>
              <Card.Title> Card Example</Card.Title>
              <Card.Text> This is an example of react boostrap cards</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test3</Breadcrumb.Item>
          </Breadcrumb>
          {/* variant es la forma de darle estilo a traves de bootstrap, hace las veces de className, 
        tipos de variant:
        variant="primary"
        variant="secundary"
        varian="success" */}
          <Alert variant="primary"> This is a button </Alert>
          <Button> Test Button </Button>
        </Container>
      </header>

    </div>
  );
}