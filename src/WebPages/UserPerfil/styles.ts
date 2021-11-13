import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    padding: 10px;
    margin: auto;
    margin-top: 20px;
`

export const Header = styled.div`
    display: flex;
    max-width: 1070px;
    align-items: center;
    margin: auto;
    img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        cursor: pointer
    };
`

export const NameArea = styled.div`
    display: flex;
    flex-direction: column;
    color: #EEE;
    align-items: center;
    justify-content: center
`
export const EmailArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    padding: 8px;
    border-radius: 20px;
    background-color: #EEE;
    color: rgb(36, 48, 79);
    font-weight: bold
`

export const DataArea = styled.div`
    display: flex;
    flex-direction: column;
`

export const DataContainer = styled.div`
    display: flex;
    width: 400px;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 15px;
    padding: 15px;
    cursor: pointer;
    background: linear-gradient(50deg, rgb(39, 51, 110) 0%, rgb(32, 42, 98) 95%);
    color: #EEE;

    h3 {
        font-weight: normal;
        margin: 0;
    }
    p {
        font-size: 14px;
        margin: 0
    }
`

export const SmallerArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
`

export const DataSmaller = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
    height: 100px;
    width: 150px;
    border-radius: 15px;
    cursor: pointer;
    background: linear-gradient(50deg, rgb(39, 51, 110) 0%, rgb(32, 42, 98) 95%);

    img {
        background-color: rgb(29, 36, 69);
        border-radius: 50%;
        padding: 2px;
    }
    h3 {
        color: #EEE;
        font-weight: normal
    }
`