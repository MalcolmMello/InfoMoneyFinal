import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(23, 36, 69);
    width: 100vw;
    height: 100vh;

    .input {
        display: flex;
        align-items: center
    }
    .passwordType {
        color: #EEE;
        cursor: pointer;
    }
    .passwordType:hover {
        color: #CCC
    }
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