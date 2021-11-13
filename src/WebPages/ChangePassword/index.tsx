import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Title } from '../../components/Title/styles'
import { useForm, FormActions } from '../../contexts/DataContext'
import * as C from './styles'

export const ChangePassword = () => {
    const history = useHistory();
    const {state, dispatch} = useForm()
    const [currentPassword, setCurrentPassword] = useState('')
    const [userPassword, setUserPassoword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [inputType, setInputType] = useState('password')
    const [inputType1, setInputType1] = useState('password')
    const [inputType2, setInputType2] = useState('password')
    
    useEffect(()=>{
        if(state.name === '') {
            history.push('/SignUp')
        }
    },[state])

    const backPage = () => {
        history.push('/beginPage')
    }

    const handleChangePassword = () => {
        if(currentPassword !== '' && userPassword !== '' && confirmPassword !== '') {
            if(state.password === currentPassword) {
                if(userPassword === confirmPassword) {
                    dispatch({
                        type: FormActions.setPassword,
                        payload: confirmPassword
                    })
                    history.push('/beginPage')
                    console.log(state.password)
                } else {
                    alert('Novas senhas não correspondem uma a outra!')
                }
            } else {
                alert('Senha atual incorreta!')
            }
        } else {
            alert('Preencha todos os campos')
        }
    }

    const handleShowPassword = () => {
        setInputType('text')
    }

    const handleHidePassword = () => {
        setInputType('password')
    }

    const handleShowPassword1 = () => {
        setInputType1('text')
    }

    const handleHidePassword1 = () => {
        setInputType1('password')
    }

    const handleShowPassword2 = () => {
        setInputType2('text')
    }

    const handleHidePassword2 = () => {
        setInputType2('password')
    }

    return (
        <C.Container>
           <div>
            <C.TitleArea>
                <img src="https://img.icons8.com/material-outlined/24/fa314a/long-arrow-left.png" onClick={backPage}/><Title>Alteral senha</Title>
            </C.TitleArea>
                <C.ContainerContent>
                    <C.InputArea>
                        <C.Input1 
                            type={inputType}
                            autoFocus
                            placeholder="Senha Atual"
                            value={currentPassword}
                            onChange={e=>setCurrentPassword(e.target.value)}
                        />
                        {inputType === 'password' &&
                            <div className="passwordType" onClick={handleShowPassword}>Mostrar Senha</div>
                        }
                        {inputType === 'text' &&
                            <div className="passwordType" onClick={handleHidePassword}>Ocultar Senha</div>
                        }
                    </C.InputArea>
                    <C.InputArea>
                        <C.Input1 
                            type={inputType1}
                            placeholder="Nova Senha"  
                            value={userPassword}
                            onChange={e=>setUserPassoword(e.target.value)}
                        />
                        {inputType1 === 'password' &&
                        <div className="passwordType" onClick={handleShowPassword1}>Mostrar Senha</div>
                        }
                        {inputType1 === 'text' &&
                            <div className="passwordType" onClick={handleHidePassword1}>Ocultar Senha</div>
                        }
                    </C.InputArea>
                    <C.InputArea>
                        <C.Input1
                            type={inputType2}
                            placeholder="Confirme a nova senha"
                            value={confirmPassword}
                            onChange={e=>setConfirmPassword(e.target.value)}
                        />
                        {inputType2 === 'password' &&
                        <div className="passwordType" onClick={handleShowPassword2}>Mostrar Senha</div>
                        }
                        {inputType2 === 'text' &&
                            <div className="passwordType" onClick={handleHidePassword2}>Ocultar Senha</div>
                        }
                    </C.InputArea>
                    <C.InputArea>
                        <button onClick={handleChangePassword}>Salvar</button>
                    </C.InputArea>
                    
                </C.ContainerContent>
           </div>
           <div className="backgroundImage">
                <img src="https://immais.com/assets/images/user.sec.png" alt="" />
           </div>
        </C.Container>
    )
}