import * as C from './styles'
import { InputArea } from '../../components/InputArea/styles'
import { Title } from '../../components/Title/styles'
import { Header } from '../../components/Header'
import { useState } from 'react'
import { useForm, FormActions } from '../../contexts/DataContext'
import { useHistory } from 'react-router'

export const Password = () => {
    const history = useHistory()
    const {state, dispatch} = useForm()
    const [password, setPassword] = useState('')
    const [inputType, setInputType] = useState('password')

    if(state.name === '' && state.nickName === '' && state.email === '') {
        history.push('/SignUp')
    }

    const handleShowPassword = () => {
        setInputType('text')
    }

    const handleHidePassword = () => {
        setInputType('password')
    }

    const nextStep = () => {
        dispatch({
            type: FormActions.setPassword,
            payload: password
        })
        if(password === '') {
            alert("Preencha sua senha!")
        }
    }

    if(state.password !== '') {
        history.push('/beginPage')
    }

    return (
        <C.Container>
            <Header />
            <InputArea>
                <Title>Agora, para finalizar seu cadastro:</Title>
                <p>Cadastre sua <strong>senha</strong></p>
                <div className="input">
                    <input 
                        type={inputType}
                        autoFocus
                        onChange={e=>setPassword(e.target.value)}
                    />
                    {inputType === 'password' &&
                        <div className="passwordType" onClick={handleShowPassword}>Mostrar Senha</div>
                    }
                    {inputType === 'text' &&
                        <div className="passwordType" onClick={handleHidePassword}>Ocultar Senha</div>
                    }
                </div>
                
            </InputArea>
            <button onClick={nextStep}>Continuar</button>
        </C.Container>
    )
}