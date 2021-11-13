import * as C from './styles'
import { ContainerWeb } from '../../components/ContainerWeb'
import { HeaderContent } from '../../components/HeaderContent'
import { HeaderWeb } from '../../components/HeaderWeb'
import { Title } from '../../components/Title/styles'
import { useHistory } from 'react-router'

export const FinancePage = () => {
    const history = useHistory()
    const handleAddAccount = () => {
        history.push('/AddAccount')
    }
    return (
        <ContainerWeb>
            <HeaderWeb>
                <HeaderContent>
                    <Title>Finanças</Title>
                </HeaderContent>
            </HeaderWeb>
            <C.Finances>
                <C.FinanceItem onClick={handleAddAccount}>
                    <p>Adicionar Instituições</p>
                    <img src="https://img.icons8.com/material-sharp/24/ffffff/arrow.png"/>
                </C.FinanceItem>
                <C.FinanceItem onClick={handleAddAccount}>
                    <p>Adicionar Ativos</p>
                    <img src="https://img.icons8.com/material-sharp/24/ffffff/arrow.png"/>
                </C.FinanceItem>
                <C.FinanceItem onClick={handleAddAccount}>
                    <p>Minhas Contas</p>
                    <img src="https://img.icons8.com/material-sharp/24/ffffff/arrow.png"/>
                </C.FinanceItem>
                <C.FinanceItem onClick={handleAddAccount}>
                    <p>Meus Ativos</p>
                    <img src="https://img.icons8.com/material-sharp/24/ffffff/arrow.png"/>
                </C.FinanceItem>
            </C.Finances>
            <C.Container>
                <C.MyInvesting>
                    <div className="imgDiv">
                        <img src="https://c.pxhere.com/images/68/1f/0ec05567250bd3c283a1a83ab75b-1444947.jpg!d" />
                    </div>
                    <div className="desc">
                        <h3>Seus investimentos</h3>
                        <p>Contecte suas corretoras e acompanhe mês a mês toda a sua carteira de investimentos</p>
                    </div>
                    <div className="buttonArea">
                        <button onClick={handleAddAccount}>Adicionar Conta</button>
                    </div>
                </C.MyInvesting>
                <C.MyFinances>
                    <div className="imgDiv">
                        <img src="https://c.pxhere.com/images/65/ff/b7fc46ecab1f00921cb08dbe7c66-1445247.jpg!d" />
                    </div>
                    <div className="desc">
                        <h3>Minhas Finanças</h3>
                        <p>Contecte suas contas correntes e acompanhe mês a mês todas as suas transações</p>
                    </div>
                    <div className="buttonArea">
                        <button onClick={handleAddAccount}>Adicionar Conta</button>
                    </div>
                </C.MyFinances>
            </C.Container>
        </ContainerWeb>
    )
}
