import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: linear-gradient(50deg, rgb(39,51,95) 0%, rgb(32,42,85) 95%);
    border-radius: 15px;
    margin-bottom: 10px;

    button {
        margin: auto;
        margin-top: 30px;
        width: 230px;
        padding: 15px;
        background: rgb(49, 80, 170);
        border: none;
        border-radius: 25px;
        color: #EEE;
        cursor: pointer;

        p {
            margin:0;
            font-weight: bold;
            font-size: 14px
        };
`


export const Input = styled.input`
    width: 300px;
    font-size: 17px;
    border-radius: 40px;
    padding: 20px;
    margin-top: 20px;
    background: none;
    border: 1px solid #EEE;
    color: #EEE;
    outline: 0;

    ::placeholder {
        color: #EEE
    }
`

export const Select = styled.select`
    width: 300px;
    font-size: 13px;
    border-radius: 40px;
    color: #000;
    padding: 20px;
    margin-top: 20px;
    background: none;
    border: 1px solid #EEE;
    outline: 0;
`

