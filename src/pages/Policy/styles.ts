import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(23, 36, 69);
    width: 100vw;
    height: 100vh;

    .policy {
        margin-top: 50px
    };
    a {
        text-decoration: none;
        color: #EEE;
    };
    a:hover {
        border-bottom: 1px solid #EEE
    };

    .policyTerms {
        display: flex;
        margin-top: 30px;
        align-items: center;

        .BOX {
            height: 30px;
            width: 30px;
            transition: ease all 0.2s;
            border-radius: 50%;
            border: 1px solid orange;
            cursor: pointer;
        };
        .BOX.checked {
            background-color: orange
        };
        p {
            margin-left: 20px
        };
    };
    
    button, .buttonTerms {
        margin: auto;
        margin-bottom: 20px;
        width: 300px;
        padding: 15px;
        background: rgb(132, 152, 208);
        border: none;
        border-radius: 25px;
        color: #EEE;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
    }

    .buttonTerms {
        background: none;
        border: 1px solid rgb(37, 54, 107);
    }

    .btn:hover {
        border-bottom: none
    }
    .buttonsDiv {
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-bottom: 30px
    }
    
`