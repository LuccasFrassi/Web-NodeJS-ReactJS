/* eslint-disable no-octal-escape */
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useState } from "react";

const Interface: React.FC = () => {
  // eslint-disable-next-line no-lone-blocks
  const [count, setCount] = useState(0); {

  }
  function adicionar() {
    setCount(count + 1);
  }

  function retirar() {
    setCount(count - 1);
  }

  function zerar() {
    setCount(count * 0);
  }


  return (
    <Container  >
      <div className="Interface">
        <Card border="danger" bg='secondary' className="text-center">
          <Card.Header><h1>Contador de Pessoas</h1></Card.Header>
          <Card.Img variant="top" src="https://1757140519.rsc.cdn77.org/static/v3/img/logo_design/pt/logo_on_white_background.png" height="400" />
          <Card.Body>
            <Card.Title>Contagem de pessoas dentro da Loja</Card.Title>
            <Card.Text>
              <h1>{count} Pessoa(s)</h1>
            </Card.Text>
            <Container>
              <div className="d-grid gap-2">
                <Button variant="success" size="lg" onClick={adicionar}><b>Aumentar</b></Button>
                <Button variant="success" size="lg" onClick={retirar}><b>Diminuir</b></Button>
                <Button variant="success" size="lg" onClick={zerar}><b>Zerar</b></Button>
              </div>
            </Container>
          </Card.Body>

        </Card>
      </div>
    </Container>
  );
}


export default Interface;