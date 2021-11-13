import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 1070px;
    margin: auto;
    margin-top: 50px;
    background: linear-gradient(50deg, rgb(39,51,95) 0%, rgb(32,42,85) 95%);
    padding: 20px;
    border-radius: 15px;
`

export const MonthArea = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer
`

export const MonthTitle = styled.div`
    flex: 1;
    text-align:center;
    color: #eee
`

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`