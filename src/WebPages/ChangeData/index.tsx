import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Title } from '../../components/Title/styles'
import { useForm, FormActions } from '../../contexts/DataContext'
import * as C from './styles'

export const ChangeData = () => {
    const history = useHistory();
    const {state, dispatch} = useForm()
    const [userName, setUserName] = useState(state.name)
    const [userNick, setUserNick] = useState(state.nickName)
    const [id, setId] = useState('')
    const [userEmail, setUserEmail] = useState(state.email)
    const [userBirth, setUserBirth] = useState('')
    const [userGender, setUserGender] = useState('')

    useEffect(()=>{
        if(state.name === '') {
            history.push('/SignUp')
        }
    },[state])

    const backPage = () => {
        history.push('/beginPage')
    }

    const handleChangeData = () => {
        if(userName !== '' && userNick !== '' && id !== '' &&
            userEmail !== '' && userBirth !== '' && userGender !== '' 
        ) {
            dispatch({
                type: FormActions.setName,
                payload: userName,
            });
            dispatch({
                type: FormActions.setNickName,
                payload: userNick,
            });
            dispatch({
                type: FormActions.setCpf,
                payload: id,
            });
            dispatch({
                type: FormActions.setEmail,
                payload: userEmail
            });
            dispatch({
                type: FormActions.setBirthday,
                payload: userBirth,
            });
            dispatch({
                type: FormActions.setGender,
                payload: userGender,
            });
            history.push('/beginPage')
        } else {
            alert('Preencha todos os dados!')
        }
    }

    return (
        <C.Container>
           <div>
                <C.TitleArea>
                    <img src="https://img.icons8.com/material-outlined/24/fa314a/long-arrow-left.png" onClick={backPage}/><Title>Perfil</Title>
                </C.TitleArea>
                <C.ContainerContent>
                    <C.InputArea>
                        <p>Nome</p>
                        <C.Input1 
                            type="text" 
                            autoFocus
                            value={userName}
                            onChange={e=>setUserName(e.target.value)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <p>Como eu te chamo</p>
                        <C.Input1 
                            type="text"  
                            value={userNick}
                            onChange={e=>setUserNick(e.target.value)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <p>CPF</p>
                        <C.Input1 
                            type="text"
                            value={id}
                            onChange={e=>setId(e.target.value)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <p>E-mail</p>
                        <C.Input1 
                            type="text" 
                            value={userEmail}
                            onChange={e=>setUserEmail(e.target.value)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <p>Data de Nascimento</p>
                        <C.Input1
                            type="text"
                            value={userBirth}
                            onChange={e=>setUserBirth(e.target.value)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <p>Gênero</p>
                        <C.Input1 
                            type="text"
                            value={userGender}
                            onChange={e=>setUserGender(e.target.value)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <button onClick={handleChangeData}>Salvar</button>
                    </C.InputArea>
                    
                </C.ContainerContent>
           </div>
           <div className="backgroundImage">
                <img src="https://immais.com/assets/images/user.sec.png" alt="" />
           </div>
        </C.Container>
    )
}