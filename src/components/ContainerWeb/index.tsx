import * as C from './styles'
import { ReactNode, useEffect } from 'react'
import { useForm } from '../../contexts/DataContext'
import { useHistory } from 'react-router'

type Props = {
    children: ReactNode
}

export const ContainerWeb = ({children}: Props) => {
    const history = useHistory()
    const {state} = useForm()

    const handleInit = () => {
        history.push('/beginPage')
    }
    const handleNews = () => {
        history.push('/newsPage')
    }
    const handleFinance = () => {
        history.push('/financePage')
    }
    const handleMarket = () => {
        history.push('/marketPage')
    }

    useEffect(()=>{
        if(state.name === '') {
            history.push('/SignUp')
        }
    },[state])

    return (
        <C.Container>
            <C.Menu>
                <C.MenuItem onClick={handleInit}>
                    <img src="https://img.icons8.com/windows/32/ffffff/home.png"/>
                    <p>Início</p>
                </C.MenuItem>
                <C.MenuItem onClick={handleNews}>
                    <img src="https://img.icons8.com/ios/50/ffffff/us-news.png"/>
                    <p>Notícias</p>
                </C.MenuItem>
                <C.MenuItem onClick={handleFinance}>
                    <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-wallet-man-accessories-kiranshastry-solid-kiranshastry.png"/>
                    <p>Finanças</p>
                </C.MenuItem>
                <C.MenuItem onClick={handleMarket}>
                    <img src="https://img.icons8.com/external-becris-lineal-becris/64/ffffff/external-graphic-finance-taxation-becris-lineal-becris.png"/>
                    <p>Mercado</p>
                </C.MenuItem>  
            </C.Menu>
            {children}
        </C.Container>
    )
}