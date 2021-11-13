import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background: linear-gradient(50deg, rgb(39, 51, 85) 0%, rgb(32, 42, 70) 95%);
    padding: 40px;
    overflow-x: hidden;

    .arrow {
        margin-bottom: 10px;
        cursor: pointer
    }
`

export const ContainerContent = styled.div`
    display: flex;
    width: 600px;
    flex-direction: column;
    margin-top: 10px;
`

export const Desc = styled.div`
    padding: 5px;
    color: #EEE;
    margin-bottom: 10px
`

export const TitleArea = styled.div`
    display: flex;
    height: 100px;
    width: 400px;
    margin-bottom: 10px;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0px 0px 3px #fff;
    justify-content: space-around;
    background-color: rgb(39, 51, 93);

    p {
        color: #EEE;
    }
`

export const BancoInter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
    border-radius: 25px;
    background-color: orange;
    color: #EEE;
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
    padding: 20px;
    background: none;
    border: 1px solid #FFF;
    border-radius: 40px;
    outline: 0;
    color: #EEE;
    font-size: 23px;

    ::placeholder {
        color: #EEE
    }
`