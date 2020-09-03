import React from 'react';
import { Actions } from 'react-native-router-flux';

import { Container, InfoContainer, Info, ButtonsContainer, Button, Texto } from './styles';

const Home = () => {
   const goToNos = () => {
      Actions.nos()
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
                Escolha uma das opções para continuar: 
            </Info>
        </InfoContainer>
        <ButtonsContainer>
             <Button onPress={goToNos}>
                <Texto>Sobre nós</Texto>
             </Button>
            <Button onPress={goToImc}>
                <Texto>Calcular IMC</Texto>
            </Button>
        </ButtonsContainer>
    </Container>
   )
}
export default Home