import styled from "styled-components";
//background: linear-gradient(140deg,rgb(40, 57, 112) , rgb(11, 13, 26) 40%);
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url('https://web.immais.com/assets/images/im.background.png');
    width: 100vw;
    height: 100vh;
`

export const Slide = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 980px;
    height: 500px;
    margin: auto;
`
export const DescArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 30px;
    };

    .desc {
        margin-top: 30px;
        p {
            color: #FFF;
            font-size: 17px;
            text-align: center;
            line-height:30px
        }
    }
`

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    button {
        width: 230px;
        padding: 15px;
        background: linear-gradient(90deg, rgb(246,141,82), rgb(231, 111,69));
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
    button:hover {
        background: rgb(251, 128, 70)
    }
`