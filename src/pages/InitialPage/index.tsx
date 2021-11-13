import * as C from './styles'
import { useHistory } from 'react-router-dom'

export const InitialPage = () => {
    const history = useHistory();

    const handleNextPage = () => {
        history.push('/SignUp')
    }

    return (
        <C.Container>
            <C.Slide>
                <C.DescArea>
                    <img src="https://immais.com/assets/images/im.logo.png" alt="" />
                    <div className="desc">
                        <p> <strong>Fliper</strong>, plataforma de consolidação automática e
                            <strong> InfoMoney</strong>, <br/> maior portal
                            de notícias do Brasil, agora juntos <br/>
                        </p>
                    </div>
                </C.DescArea>
                <C.ButtonArea>
                    <button onClick={handleNextPage} className="createAccount"><p>Criar Conta</p></button>
                </C.ButtonArea>
            </C.Slide>
        </C.Container>
    )
}