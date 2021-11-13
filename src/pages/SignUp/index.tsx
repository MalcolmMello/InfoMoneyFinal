import * as C from './styles'
import { useHistory } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/DataContext'
import { Header } from '../../components/Header'
import { InputArea } from '../../components/InputArea'
import { Title } from '../../components/Title'
import { useState } from 'react'


export const SignUp = () => {
    const history = useHistory()
    const {state, dispatch} = useForm()

    const [active, setActive] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [userName, setUserName] = useState('')
    const [nickName, setNickName] = useState('')


    const showInput = ()=> {
        dispatch({
            type: FormActions.setName,
            payload: userName
        })
        if(userName === '') {
            setActive(false)
            alert('Preencha o seu nome completo!')
        } else {
            setActive(true)
            setDisabled(true)
        }
    }

    const nextStep = () => {
        dispatch({
            type: FormActions.setNickName,
            payload: nickName
        })
    }
    if(state.name !== '' && state.nickName !== '') {
        history.push('/Policy')
    } 
    
    return (
        <C.Container>
            <Header />

            <InputArea>
                <Title>
                    Boas Vindas!
                </Title>
                <p>Para começar, qual o <strong>seu nome completo?</strong></p>

                <input 
                    type="text"
                    autoFocus
                    disabled={disabled}
                    onChange={e=>setUserName(e.target.value)}
                />

                <C.NoneInput active={active}>
                    <p>Legal, {state.name} <strong>como posso te chamar?</strong></p>
                    <input 
                        type="text"
                        autoFocus
                        onChange={e=>setNickName(e.target.value)}
                    />
                </C.NoneInput>

            </InputArea>
            
            {state.name === '' &&
                <button onClick={showInput}><p>Continuar</p></button>
            } 
            {state.name !== '' &&
                <button onClick={nextStep}><p>Continuar</p></button>
            }
            
        </C.Container>
    )
}