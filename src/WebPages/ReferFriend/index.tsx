import * as C from './styles'
import { useHistory } from 'react-router'
import { ContainerWeb } from '../../components/ContainerWeb'
import { HeaderContent } from '../../components/HeaderContent'
import { HeaderWeb } from '../../components/HeaderWeb'
import { Title } from '../../components/Title/styles'
import { Header } from '../../components/Header/styles'

export const ReferFriend = () => {
    const history = useHistory();

    const handleLink = () => {
        alert('Envie aos seus amigos https://infomoney.onelink.me/Mmb2/d37224a')
    }

    const backPage = () => {
        history.push('/beginPage')
    }

    return(
        <ContainerWeb>
            <HeaderWeb>
                <C.TitleArea>
                    <img src="https://img.icons8.com/material-outlined/24/fa314a/long-arrow-left.png" onClick={backPage}/><Title>Compartilhar im+</Title>
                </C.TitleArea>
            </HeaderWeb>
            <C.Container>
                <C.Fundamentals>
                    <div className="imgDiv">
                        <img src="https://c.pxhere.com/photos/5a/97/hand_iphone_smartphone_mobile_phone_phone-3914.jpg!d" />
                    </div>
                    <div className="desc">
                        <h3>Ajude seus amigos!</h3>
                        <p>Mostre como é fácil tomar melhores <br/> decisões financeiras com o nosso app! </p>
                    </div>
                    <div className="buttonArea">
                        <button onClick={handleLink}>Ajude Agora!</button>
                    </div>
                </C.Fundamentals>
            </C.Container>
        </ContainerWeb>
    )
}
