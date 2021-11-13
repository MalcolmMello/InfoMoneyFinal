import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-gap: 50px;
    max-width: 1280px;
    padding: 10px;
    margin: auto;
    margin-top: 20px;
`

export const Finances = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 1070px;
    padding: 10px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 40px;
`

export const FinanceItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
    height: 100px;
    width: 150px;
    margin-right: 30px;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0px 0px 20px #111;
    background: linear-gradient(50deg, rgb(39, 51, 110) 0%, rgb(32, 42, 98) 95%);

    img {
        background-color: rgb(29, 36, 69);
        border-radius: 50%;
        padding: 2px;
    }
    p {
        margin:0;
        color: #EEE;
    }
`

export const MyInvesting = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 290px;
    width: 350px;
    border-radius: 20px;
    box-shadow: 1px 1px 8px #111;
    background: linear-gradient(50deg, rgb(39, 51, 95) 0%, rgb(32, 42, 85) 95%);
    margin-left: 10px;

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
        margin-top: 10px;
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
            font-size: 14px
        }
    }
`

export const MyFinances = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 290px;
width: 350px;
border-radius: 20px;
box-shadow: 1px 1px 8px #111;
background: linear-gradient(50deg, rgb(39, 51, 95) 0%, rgb(32, 42, 85) 95%);
margin-left: 10px;

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
    margin-top: 10px;
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