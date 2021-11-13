import styled from "styled-components";

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 90px;);
    min-width: 980px;
    margin: auto;
    margin-top: 40px;

    p {
        color: #eee;
        font-size: 20px;
        line-height:30px
    };

    input {
        background: none;
        border: none;
        outline: 0;
        width: 400px;
        height: 50px;
        color: rgb(235,235,235);
        font-size: 23px;
        font-weight: 700;
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