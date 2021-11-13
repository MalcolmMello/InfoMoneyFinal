import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background: linear-gradient(50deg, rgb(39, 51, 85) 0%, rgb(32, 42, 70) 95%);
`

export const Header = styled.div`
    height: 100px;
    width: 100%;
    top:0;
    left:0;
    right:0;
    padding: 20px;
    box-shadow:0px 0px 8px #111;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background: linear-gradient(50deg, rgb(39, 51, 95) 0%, rgb(32, 42, 85) 95%);
`

export const HeaderData = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 980px;
    margin: auto;

    .user {
        .pUser {
            font-size: 30px;
            font-weight: bold;
            color: #EEE;
            margin: 0;
        }
        a {
            font-size: 14px;
            text-decoration: none; 
            color: #EEE;
            margin: 0
        }
        a:hover {
            color: #ddd;
        }
    }

    img {
        width: 120px;
        height: 60px;
    }
    
`

export const ContainerWeb = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    max-width: 1280px;
    padding: 10px;
    margin: auto;
    margin-top: 20px;
    overflow-x: hidden;

    .add {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 300px;
        width: 350px;
        border-radius: 20px;
        box-shadow: 1px 1px 8px #111;
        background-image: linear-gradient(180deg, rgb(42,71,153) , rgb(31, 40,75) , rgb(11,13,26));;
        margin-left: 10px;
        margin-top: 30px;
        p {
            color: #EEE;
            font-size: 20px
        }
        button {
            width: 300px;
            padding: 15px;
            background: linear-gradient(90deg, rgb(246,141,82), rgb(231, 111,69));
            border: none;
            border-radius: 25px;
            color: #EEE;
            cursor: pointer;
            margin-bottom: 20px;
    
            p {
                margin:0;
                font-weight: bold;
                font-size: 13px
            }
        }
        button:hover {
            background: rgb(251, 128, 70)
        }
    }
    .seeMore {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        width: 350px;
        border-radius: 20px;
        margin-left: 10px;
        margin-top: 30px;

        .seeMoreContent {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            a {
                text-decoration: none;
                color: #EEE;
            };
            a:hover {
                color: #ddd
            }
            img {
                width: 20px;
                height: 20px;
                margin-left: 5px;
            }
        }
    }
    .referFriend {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        width: 350px;
        border-radius: 20px;
        margin-left: 10px;
        margin-top: 30px;
        background-image: url('https://immais.com/assets/images/user.sec.png');
        background-position: center;
        box-shadow: 1px 1px 8px #111;
        cursor: pointer
    }
    .referFriendContent {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 10px;

        h1 {
            color: #EEE;
            margin:0;
            text-shadow: 0px 0px 4px #000
        }

        p {
            color: #EEE;
            margin: 0;
            margin-top: 5px;
            text-shadow: 0px 0px 4px #000
        }
    }
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
