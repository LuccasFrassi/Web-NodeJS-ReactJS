/* eslint-disable no-octal-escape */
import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './foto.css';

const Foto: React.FC = () => {
  return (
    <Container className="flex">


      <Image className="foto" src="https://i.ibb.co/2PNSntB/foto.jpg" />
      <h3>Olá meu nome é Luccas tenho 19 anos, atualmente estou cursando o 4º semestre de Ciência da
        Computação pela UNIP. Estou à procura de meu primeiro emprego na área da informática. Sou esforçado, tenho
        facilidade para aprender e sou bom com trabalho em equipe.<br /><br />
        Abaixo esta alguma informações sobre mim.
      </h3 >



    </Container >

  );

}
export default Foto;