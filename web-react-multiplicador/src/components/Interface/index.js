import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';


class Numeros extends React.Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      result: 0,
    };

    this.pegaNum1 = this.pegaNum1.bind(this);
    this.pegaNum2 = this.pegaNum2.bind(this);
  }

  pegaNum1(event) {
    this.setState({
      number1: Number(event.target.value),
    });
  }

  pegaNum2(event) {
    this.setState({
      number2: Number(event.target.value),
    });
  }

  multNum = () => {
    this.setState({
      result: this.state.number1 * this.state.number2,
    });
  }

  addtNum = () => {
    this.setState({
      result: this.state.number1 + this.state.number2,
    });
  }

  subtNum = () => {
    this.setState({
      result: this.state.number1 - this.state.number2,
    });
  }

  divtNum = () => {
    this.setState({
      result: this.state.number1 / this.state.number2,
    });
  }



  render() {
    return (
      <>
        <Container>
          <div className="Interface">
            <Card border="danger" bg='info' className="text-center">
              <Card.Header><h1>Calculadora Simples</h1></Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form>
                    <Form.Control type="number" size="lg" placeholder={this.state.result} readOnly />


                    <Row><Col>{`ㅤ`} </Col></Row>
                    <Row><Col> {`ㅤ`}</Col></Row>
                    <Row><Col> {`ㅤ`}</Col></Row>
                    <Row><Col> {`ㅤ`}</Col></Row>
                    <Row><Col> {`ㅤ`}</Col></Row>

                    <Row>
                      <Col >
                        <Form.Group className="mb-3" controlId="Número 1">
                          <Form.Label><h2>Nº 1</h2></Form.Label>
                          <Form.Control type="number" value={this.state.pegaNum1} onChange={this.pegaNum1} placeholder="Number 1" />
                        </Form.Group>
                      </Col >
                      <Col >
                        <Form.Group className="mb-3" controlId="Número 2">
                          <Form.Label><h2>Nº 2</h2></Form.Label>
                          <Form.Control type="number" value={this.state.pegaNum2} onChange={this.pegaNum2} placeholder="Number 2" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Container>
                      <div className="d-grid gap-2">
                        <Button variant="danger" onClick={this.addtNum}><b>Somar</b></Button>
                        <Button variant="danger" onClick={this.subtNum}><b>Subtrair</b></Button>
                        <Button variant="danger" onClick={this.divtNum}><b>Dividir</b></Button>
                        <Button variant="danger" onClick={this.multNum}><b>Multiplicar</b></Button>
                      </div>
                    </Container>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </>
    );
  }
}


export default Numeros;