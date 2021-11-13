import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background: linear-gradient(50deg, rgb(39, 51, 85) 0%, rgb(32, 42, 70) 95%);
`

export const Header = styled.header`
    max-height: 120px;
    padding: 20px;
    box-shadow: 0px 0px 8px;
    background: linear-gradient(50deg, rgb(39,51,95) 0%, rgb(32,42,85) 95%);
`

export const HeaderContent = styled.div`
    display: flex;
    max-width: 1070px;
    margin: auto;
    align-items: center;
    img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        cursor: pointer
    };
`

export const FinanceContent = styled.div`
    display: flex;
    width: 1070px;
    margin: auto;
    margin-top: 50px;
`

export const FinanceControlScreen = styled.table`
    flex: 2;
    background: linear-gradient(50deg, rgb(39,51,95) 0%, rgb(32,42,85) 95%);
    padding: 20px;
    border-radius: 15px;
    margin-right: 20px;
    margin-bottom: 10px;
`

export const TableHeadColumn = styled.th<{width?: number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    color: #EEE
`

export const AddItem = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: linear-gradient(50deg, rgb(39,51,95) 0%, rgb(32,42,85) 95%);
    border-radius: 15px;
    margin-bottom: 10px;

    button {
        margin: auto;
        margin-top: 30px;
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
`

export const Input = styled.input`
    width: 300px;
    font-size: 17px;
    border-radius: 40px;
    padding: 20px;
    margin-top: 20px;
    background: none;
    border: 1px solid #EEE;
    color: #EEE;
    outline: 0;
`