import * as C from './styles'
import { useForm, FormActions } from '../../contexts/DataContext'
import { useHistory, Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { InputArea } from '../../components/InputArea'
import { Title } from '../../components/Title'
import { useState } from 'react'

export const Policy = ()=> {
    const history = useHistory()
    const {state, dispatch} = useForm()
    const [boxChecked, setBoxChecked] = useState(false)
    if(state.name === '' && state.nickName === '') {
        history.push('/SignUp')
    }
    const handleCheck = () => {
        setBoxChecked(!boxChecked)
    }
    const nextStep = () => {
        if(boxChecked === true) {
            history.push('/email')
        } else {
            alert('Para avançar, você precisa estar de acordo com os Termos!')
        }
    }
    const checkedClass = boxChecked ? 'checked' : '';
    const divClass = `BOX ${checkedClass}` 

    return (
        <C.Container>
            <Header />
            <InputArea>
                <Title>
                    Que bom te ver por aqui, <br/>{state.nickName}!
                </Title>
                <div className="policy">
                    <p>Para continuar, é necessário estar de acordo <br/>
                        com nossos <Link to="policyandterms" target="_blank"><strong>Termos de Uso e Políticas de Privacidade</strong></Link>
                    </p>
                </div>

                <div className="policyTerms">
                    <div className={divClass} onClick={handleCheck}></div>
                    <p>Concordo com os <Link to="policyandterms" target="_blank"><strong>termos de uso</strong> e <strong>políticas de privacidade</strong></Link></p>
                </div>
            </InputArea>
            <div className="buttonsDiv">
                <Link to="policyandterms" className="btn" target="_blank"><button className="buttonTerms">Abrir Termos</button></Link>
                <button onClick={nextStep}>Estou de acordo</button>
            </div>
        </C.Container>
    )
}