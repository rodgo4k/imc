import React from 'react';
import { Actions } from 'react-native-router-flux';

import { Container, InfoContainer, Info, ButtonsContainer, Button, Texto } from './styles';

const Nos = () => {
   const goToHome = () => {
      Actions.home()
   }

   const goToImc = () => {
      Actions.imc()
   }

   return (
    <Container>
      <InfoContainer>
        <Info>
            Este aplicativo foi desenvolvido para calcular seu Índice de Massa Corporal (IMC).
            Os dados que aqui constam são os mesmos fornecidos pela Organização Mundial da Saúde. 
        </Info>
      </InfoContainer>
      <ButtonsContainer>
        <Button onPress={goToHome}>
            <Texto>Voltar</Texto>
        </Button>
        <Button onPress={goToImc}>
            <Texto>Calcular IMC</Texto>
        </Button>
      </ButtonsContainer>
    </Container>
   )
}
export default Nos