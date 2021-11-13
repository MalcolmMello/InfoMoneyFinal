import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 350px;
    border-radius: 20px;
    box-shadow: 1px 1px 8px #111;
    background: linear-gradient(50deg, rgb(39, 51, 95) 0%, rgb(32, 42, 85) 95%);
    margin-left: 10px;
    margin-top: 30px;
    cursor:pointer;
    
    .newsContent {
        padding: 10px;
        overflow-y:hidden;
        word-wrap: break-word;
    }
    img {
        height: 130px;
        width: 100%;
        object-fit: cover;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    p {
        font-size: 14px;
        color: #EEE;
    }
    .title {
        font-weight: bold;
    }
`