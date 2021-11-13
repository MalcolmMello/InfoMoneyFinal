import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background: linear-gradient(50deg, rgb(39, 51, 85) 0%, rgb(32, 42, 70) 95%);
    padding: 40px;
    overflow-x: hidden;

    .backgroundImage {
        
    }
`

export const ContainerContent = styled.div`
    display: flex;
    width: 600px;
    flex-direction: column;
    margin-top: 10px;
`

export const TitleArea = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    img {
        width: 24px;
        height: 24px;
        cursor: pointer;
        margin-right: 10px;
    }
`

export const InputArea = styled.div`
    margin-bottom: 20px;

    button {
        margin: auto;
        margin-top: 10px;
        width: 200px;
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
        }
    }
    p {
        margin: 0;
        color: #EEE;
        font-weight: bold
    }
`

export const Input1 = styled.input`
    width: 400px;
    height: 50px;
    background: none;
    border: none;
    outline: 0;
    color: #EEE;
    font-size: 23px
`

export const Input2 = styled.input`
    width: 400px;
    height: 50px;
    background: none;
    border: none;
    border-bottom: 1px solid orange;
    outline: 0;
    color: #EEE;
    font-size: 23px
`