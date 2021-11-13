import * as C from './styles'
import { ContainerWeb } from '../../components/ContainerWeb'
import { HeaderContent } from '../../components/HeaderContent'
import { HeaderWeb } from '../../components/HeaderWeb'
import { Title } from '../../components/Title/styles'

export const marketPage = () => {
    return (
        <ContainerWeb>
            <HeaderWeb>
                <HeaderContent>
                    <Title>Mercado</Title>
                </HeaderContent>
            </HeaderWeb>
            <C.Container>
                <C.Fundamentals>
                    <div className="imgDiv">
                        <img src="https://c.pxhere.com/photos/70/54/chart_trading_courses_forex_analysis_shares_stock_exchange-1163685.jpg!d" />
                    </div>
                    <div className="desc">
                        <h3>Fundamentos</h3>
                        <p>Acompanhe informações financeiras e indicadores fundamentalistas das empresas e fundos do mercado!</p>
                    </div>
                    <div className="buttonArea">
                        <button>Acompanhe</button>
                    </div>
                </C.Fundamentals>
            </C.Container>
        </ContainerWeb>
    )
}
