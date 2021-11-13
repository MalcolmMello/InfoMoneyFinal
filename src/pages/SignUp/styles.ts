
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgb(23, 29, 56), rgb(23, 36, 69));
    width: 100vw;
    height: 100vh;

    button {
        margin: auto;
        margin-bottom: 60px;
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
        }
    }
`

export const NoneInput = styled.div<{active: boolean}>`
    margin-left: ${props => props.active ? "0" : "-500px"};
    margin-top: 35px;
    transition: ease all 0.3s;
`
