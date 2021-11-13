import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr); 
    grid-gap: 50px;
    max-width: 1280px;
    padding: 10px;
    margin: auto;
    margin-top: 20px;
`
export const Fundamentals = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 290px;
width: 350px;
border-radius: 20px;
box-shadow: 1px 1px 8px #111;
background: linear-gradient(50deg, rgb(39, 51, 95) 0%, rgb(32, 42, 85) 95%);
margin-left: 10px;
cursor:pointer;

.desc {
    margin-top: 10px;
    padding: 10px;
    h3, p {
        color: #EEE;
        margin: 0;
    }
    p {
        font-size: 14px;
        margin-top: 10px;
    }
}

.imgDiv {
    margin-top: 20px;
}
img {
    height: 110px;
    width: 320px;
    object-fit: cover;
    border-radius: 10px;
}
button {
    margin: auto;
    margin-top: 2px;
    width: 170px;
    padding: 10px;
    background: rgb(49, 80, 170);
    border: none;
    border-radius: 25px;
    color: #EEE;
    cursor: pointer;

    p {
        margin:0;
        font-weight: bold;
        font-size: 14px;
    }
}
`