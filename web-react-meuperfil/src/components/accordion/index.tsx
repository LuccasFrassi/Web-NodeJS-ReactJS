import React from 'react';
import { Accordion } from 'react-bootstrap';
import { } from 'react-dom';
import './accordion.css';
function Tabela() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Pessoal</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>CEP: Abrobinha 123 </li>
              <li>Bairro: Abrobinha 123 </li>
              <li>Endereço: Abrobinha 123  </li>
              <li>E-mail: luccasfrassi@gmail.com</li>
              <li>Cel: (13) - 991658989</li>

            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Formação</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Curso: Ciência da Computação </li>
              <li>Período: Noturno Conclusão: 2 º semestre de 2023</li>
              <li> Instituição de Ensino: Universidade Paulista - Unip - Santos - Rangel</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Experiência</Accordion.Header>
          <Accordion.Body>
            <ul>
              <p> Intermediário:</p>
              <li> Microsoft Word</li>
              <li> Microsoft Excel</li>
              <li>HTML5</li>
              <li>Python</li><br />
              <p>Básico:</p>
              <li> Microsoft PowerPoint</li>
              <li>JavaScript</li>
              <li>Nodejs</li>
              <li>Reactjs</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Projetos</Accordion.Header>
          <Accordion.Body>
            <ul>
              Ainda estou no processo de colocar meus projetos no github você pode acompanhar no link abaixo
              <li><a href="https://github.com/LuccasFrassi">Meu Github</a></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


    </div>)
}

export default Tabela;