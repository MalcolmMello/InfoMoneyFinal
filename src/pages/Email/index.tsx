import * as C from './styles'
import { useForm, FormActions } from '../../contexts/DataContext'
import { useHistory, Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { InputArea } from '../../components/InputArea'
import { Title } from '../../components/Title'
import { useState } from 'react'


export const Email = () => {
    const [email, setEmail] = useState('')
    const {state, dispatch} = useForm()
    const history = useHistory()
    if(state.name === '' && state.nickName === '') {
        history.push('/SignUp')
    }
    const nextStep = () => {
        dispatch({
            type: FormActions.setEmail,
            payload: email
        })
        if(email === '') {
            alert("Preencha seu email!")
        }
    }
    if(state.email !== '') {
        history.push('/password')
    }
    return (
        <C.Container>
            <Header />
            <InputArea>
                <Title>Vamos lá!</Title>
                <p>Qual o seu email?</p>
                <input
                    type="email"
                    autoFocus
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <button onClick={nextStep}>Continuar</button>
            </InputArea>
        </C.Container>
    )
}