import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(50deg, rgb(39, 51, 85) 0%, rgb(32, 42, 70) 95%);
`

export const Content = styled.div`
    max-width: 1080px;
    padding: 10px;
    margin: auto;
    margin-top: 20px;

`

export const TitleArea = styled.div`
    display: flex;
    width: 1080px;
    height: 50px;
    margin: auto;
    align-items: center;
    img {
        width: 24px;
        height: 24px;
        cursor: pointer;
        margin-right: 10px;
    }
`

export const Finances = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 1070px;
    padding: 10px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 40px;
`

export const FinanceItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 200px;
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

export const NameAccount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background: linear-gradient(50deg, rgb(39, 51, 85) 0%, rgb(32, 42, 70) 95%);
`

export const BancoInter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: orange;
    color: #FFF;
    font-weight: bold
`

export const XPInvestimentos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: black;
    color: #FFF;
    font-weight: bold
`

export const ButtonArea = styled.div`
    margin-bottom: 10px;
    button {
        margin: auto;
        margin-top: 20px;
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

export const ActiveArea = styled.div`

`

export const AreaTitle = styled.div`
    margin-left: 180px;

    .title {
        font-size: 20px;
        font-weight: bold;
        color: #999;
    }
    p {
        color: #999;
    }
`

export const Actions = styled.div`

`

export const Invest = styled.div`
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

export const InvestItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    color: #888;
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