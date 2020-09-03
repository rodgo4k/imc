import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
    background: rgb(230, 230, 230);
`;

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const HeaderContainer = styled.View`
    margin: 20px;
`;

export const Texto = styled.Text`
    font-weight: bold;
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    margin: 50px;
    padding: 20px 35px;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 20px;
`;

export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px;
`;

export const InputLabel = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Input = styled.TextInput`
    margin-left: 10px;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 5px;
    padding: 5px 15px;
    width: 100px;
`;

export const DataContainer = styled.View`

`;

export const DataTitle = styled.Text`
    font-size: 18px;
    text-align: center;
    margin: 10px;
`;

export const Data = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const DataNumber = styled.Text`
    font-weight: bold;
    margin-right: 10px;
`;

export const DataInfo = styled.Text`
    margin-left: 10px;
`;
