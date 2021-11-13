import * as C from './styles'
import { useHistory } from 'react-router'
import { HeaderWeb } from '../../components/HeaderWeb'
import { Title } from '../../components/Title/styles'

export const AddAccount = () => {
    const history = useHistory();

    const backPage = () => {
        history.push('/beginPage')
    }

    const handleBancoInter = () => {
        history.push('/BancoInter')
    }

    return (
        <C.Container>
            <HeaderWeb>
                <C.TitleArea>
                    <img src="https://img.icons8.com/material-outlined/24/fa314a/long-arrow-left.png" onClick={backPage}/><Title>Adicione</Title>
                </C.TitleArea>
            </HeaderWeb>
            <C.Finances>
                <C.FinanceItem onClick={handleBancoInter}>
                    <C.BancoInter>
                        Banco Inter
                    </C.BancoInter>
                    <C.NameAccount>
                        <p>Banco Inter</p>
                    </C.NameAccount>
                </C.FinanceItem>
                <C.FinanceItem onClick={handleBancoInter}>
                    <C.BancoInter>
                        Banco Inter
                    </C.BancoInter>
                    <C.NameAccount>
                        <p>Banco Inter</p>
                    </C.NameAccount>
                </C.FinanceItem>
                <C.FinanceItem onClick={handleBancoInter}>
                    <C.BancoInter>
                        Banco Inter
                    </C.BancoInter>
                    <C.NameAccount>
                        <p>Banco Inter</p>
                    </C.NameAccount>
                </C.FinanceItem>
                <C.FinanceItem onClick={handleBancoInter}>
                    <C.BancoInter>
                        Banco Inter
                    </C.BancoInter>
                    <C.NameAccount>
                        <p>Banco Inter</p>
                    </C.NameAccount>
                </C.FinanceItem>
            </C.Finances>
                <C.ButtonArea>
                    <button>MINHAS CONTAS</button>
                </C.ButtonArea>
            <C.Content>
                    <C.AreaTitle>
                        <p className="title">Adicione seus produtos</p>
                        <p>Insira os seus ativos um a um</p>
                    </C.AreaTitle>
                <C.ActiveArea>
                    <C.Actions>
                        <C.Invest>
                            <C.InvestItems>
                                <img src="https://img.icons8.com/ios/50/000000/financial-analytics.png"/>
                                Em breve
                            </C.InvestItems>
                            <C.InvestItems>
                                <img src="https://img.icons8.com/ios/50/000000/financial-analytics.png"/>
                                Em breve
                            </C.InvestItems>
                            <C.InvestItems>
                                <img src="https://img.icons8.com/ios/50/000000/financial-analytics.png"/>
                                Em breve
                            </C.InvestItems>
                            <C.InvestItems>
                                <img src="https://img.icons8.com/ios/50/000000/financial-analytics.png"/>
                                Em breve
                            </C.InvestItems>
                        </C.Invest>
                    </C.Actions>
                </C.ActiveArea>
            </C.Content>  
            <C.ButtonArea>
                <button>VER MEUS ATIVOS MANUAIS</button>
            </C.ButtonArea>      
            </C.Container>
    )
}