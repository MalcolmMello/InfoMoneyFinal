import styled from "styled-components";

export const Story = styled.div<{background: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 90px;
    border-radius: 45px;
    border:1px solid gold;
    margin-bottom: 10px;
    background-image: url('https://img.icons8.com/nolan/64/bitcoin.png');
    background-position: center
`