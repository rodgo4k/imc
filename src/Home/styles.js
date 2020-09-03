import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: rgb(230, 230, 230);
`;

export const InfoContainer = styled.View`
    padding: 20px;
`;

export const Info = styled.Text`
    text-align: center;
`;

export const Texto = styled.Text`
    font-weight: bold;
    text-align: center;
`;

export const ButtonsContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    margin: 25px;
    padding: 20px 35px;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 20px;
`;
