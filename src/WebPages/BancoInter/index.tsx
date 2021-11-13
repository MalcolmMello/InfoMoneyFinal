import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Title } from '../../components/Title/styles'
import { useForm, FormActions } from '../../contexts/DataContext'
import * as C from './styles'

export const BancoInter = () => {
    const history = useHistory();
    const {state, dispatch} = useForm()
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [cpf, setCpf] = useState('')

    if(state.InterAccount !== '') {
        history.push('/financeControl')
    }

    const sendData = () => {
        if(account !== '' && password !== '' && confirmPassword !== '' && cpf !== '') {
            if(password === confirmPassword) {
                dispatch({
                    type: FormActions.setInterAccount,
                    payload: account
                })
                dispatch({
                    type: FormActions.setInterPassword,
                    payload: confirmPassword
                })
                dispatch({
                    type: FormActions.setInterCPF,
                    payload: cpf
                })
                history.push('/financeControl')
            } else {
                alert('Senhas não correspondem uma a outra')
            }
        } else {   
            alert('Preencha todos os campos')
        }
    
    }
    useEffect(()=>{
        if(state.name === '') {
            history.push('/SignUp')
        }
    },[state])

    const backPage = () => {
        history.push('/beginPage')
    }

    return (
        <C.Container>
           <div>
                <img src="https://img.icons8.com/material-outlined/24/fa314a/long-arrow-left.png" className='arrow' onClick={backPage}/>
                <C.TitleArea>
                    <C.BancoInter>Inter</C.BancoInter>
                    <p>Banco Inter</p>
                </C.TitleArea>
                <C.ContainerContent>
                    <C.Desc>
                        <p>Informe os dados da conta.</p>
                        <p>Os dados serão utilizados somente em modo de leitura <br/>
                            para consolidar seus dados financeiros e pessoais.
                        </p>
                    </C.Desc>
                    <C.InputArea>
                        <C.Input1 
                            type="number" 
                            autoFocus
                            placeholder="Conta"
                            value={account}
                            onChange={e=>setAccount(e.target.value)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <C.Input1 
                            type="number"  
                            value={password}
                            placeholder="Senha"
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <C.Input1 
                            type="number"
                            value={confirmPassword}
                            onChange={e=>setConfirmPassword(e.target.value)}
                            placeholder="Confirmar Senha"
                        />
                    </C.InputArea>
                    <C.Desc>
                        <p>Nois informe seu CPF para que possamos<br/>
                            completar seu perfil:
                        </p>
                    </C.Desc>
                    <C.InputArea>
                        <C.Input1 
                            type="number" 
                            value={cpf}
                            onChange={e=>setCpf(e.target.value)}
                            placeholder="CPF"
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <button onClick={sendData}>Salvar</button>
                    </C.InputArea>
                    
                </C.ContainerContent>
           </div>
           <div className="backgroundImage">
                <img src="https://immais.com/assets/images/user.sec.png" alt="" />
           </div>
        </C.Container>
    )
}