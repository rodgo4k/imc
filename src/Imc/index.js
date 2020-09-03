import React, { useState } from 'react';
import { Actions } from 'react-native-router-flux';

import { Wrapper, Container, HeaderContainer, InputContainer, InputLabel, Input, Button, Texto,
         DataContainer, DataTitle, Data, DataNumber, DataInfo } from './styles';

const Imc = () => {
   const goToHome = () => {
      Actions.home()
   }

   const [height, setHeight] = useState(0);
   const [weight, setWeight] = useState(0);

   const heightNumber = parseFloat(height)
   const weightNumber = parseFloat(weight)

   const squareHeight = heightNumber * heightNumber;
   const imc = weightNumber / squareHeight;

   return (
    <Wrapper>
       <Container>
           <HeaderContainer>
               <Texto>Calcule seu IMC</Texto>
               <Texto>Por favor use ponto ao invés de vírgula para a altura:</Texto>
           </HeaderContainer>

           <InputContainer>
                <InputLabel>Altura:</InputLabel>
                <Input keyboardType='numeric' onChangeText={text => setHeight(text)} />
           </InputContainer>
           <InputContainer>
                <InputLabel>Peso:</InputLabel>
                <Input keyboardType='numeric' onChangeText={text => setWeight(text)} />
           </InputContainer>
           <InputContainer>
                <InputLabel>Seu IMC é: {imc}</InputLabel>
           </InputContainer>

           <DataContainer>
                <DataTitle>Dados segundo a OMS:</DataTitle>
                <Data>
                    <DataNumber>Menor que 18,5:</DataNumber>
                    <DataInfo> abaixo do peso</DataInfo>
                </Data>
                <Data>
                    <DataNumber>Entre 18,5 e 24,9:</DataNumber>
                    <DataInfo> peso normal</DataInfo>
                </Data>
                <Data>
                    <DataNumber>Entre 25 e 29,9:</DataNumber>
                    <DataInfo> acima do peso</DataInfo>
                </Data>
                <Data>
                    <DataNumber>Entre 30 e 34,9:</DataNumber>
                    <DataInfo> obesidade grau 1</DataInfo>
                </Data>
                <Data>
                    <DataNumber>Entre 35 e 39,9:</DataNumber>
                    <DataInfo> obesidade grau 2</DataInfo>
                </Data>
                <Data>
                    <DataNumber>Acima de 40:</DataNumber>
                    <DataInfo> obesidade mórbida</DataInfo>
                </Data>
           </DataContainer>

           <Button onPress = {goToHome}>
               <Texto>Voltar</Texto>
           </Button>
       </Container>
    </Wrapper>
   )
}
export default Imc