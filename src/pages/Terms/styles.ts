import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(23, 36, 69);
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
`

export const Contract = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 900px;
    margin: auto;
    margin-top: 40px;
    background-color: #EEE;
    padding: 20px;
    margin-bottom: 20px;

    p {
        color: #000;
        font-size: 20px;
        line-height:30px
    };
`