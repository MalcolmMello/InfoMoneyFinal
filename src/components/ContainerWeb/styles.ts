import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(50deg, rgb(39, 51, 85) 0%, rgb(32, 42, 70) 95%);
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 780px;
    height: 60px;
    border-radius: 40px;
    position: fixed;
    bottom: 10px;
    margin: auto;
    background-color: rgb(11, 13, 34);

`

export const MenuItem = styled.div`
    width: 55px;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 80px;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;

        img {
            width: 30px;
            height: 30px;
        };
        p {
            font-size: 12px;
            margin: 0;
            color: #EEE;
        }
    }
    &:hover {
        background-color: rgb(11, 13, 50);
    }
`