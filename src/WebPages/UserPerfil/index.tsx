import * as C from './styles'
import { useHistory } from 'react-router'
import { ContainerWeb } from '../../components/ContainerWeb'
import { HeaderWeb } from '../../components/HeaderWeb'
import { HeaderContent } from '../../components/HeaderContent'
import { Title } from '../../components/Title/styles'
import { useForm, FormActions } from '../../contexts/DataContext'

export const UserPerfil = () => {
    const history = useHistory()
    const {state, dispatch} = useForm()

    const backPage = () => {
        history.push('/beginPage')
    }

    const handlePerfil = ()=> {
        history.push('/changeData')
    }

    const handlePassword = () => {
        history.push('/changePassword')
    }

    const handleAlert = () => {
        alert('Função Indisponível!')
    }

    const logOut = () => {
        dispatch({
            type: FormActions.setName,
            payload: '',
        });
        dispatch({
            type: FormActions.setNickName,
            payload: '',
        });
        dispatch({
            type: FormActions.setCpf,
            payload: '',
        });
        dispatch({
            type: FormActions.setEmail,
            payload: ''
        });
        dispatch({
            type: FormActions.setBirthday,
            payload: '',
        });
        dispatch({
            type: FormActions.setGender,
            payload: '',
        });
        dispatch({
            type: FormActions.setPassword,
            payload: '',
        });
    }
    
    return (
        <ContainerWeb>
            <HeaderWeb>
                <C.Header>
                    <img src="https://img.icons8.com/material-outlined/24/fa314a/long-arrow-left.png" onClick={backPage}/><Title>Perfil</Title>
                </C.Header>
            </HeaderWeb>
            <C.Container>
                <C.NameArea>
                    <Title>{state.nickName}</Title>
                    <C.EmailArea>{state.email}</C.EmailArea>
                    <p>IM+ - Versão 4.0.2</p>
                </C.NameArea>
                <C.DataArea>
                    <C.DataContainer onClick={handlePerfil}>
                        <h3>Perfil</h3>
                        <p>Verifique e altere seus dados</p>
                    </C.DataContainer>
                    <C.DataContainer onClick={handlePassword}>
                        <h3>Alterar senha</h3>
                        <p>Mantenha sua conta sempre segura</p>
                    </C.DataContainer>
                    <C.SmallerArea>
                        <C.DataSmaller onClick={handleAlert}>
                            <h3>Biometria / <br/> Face ID</h3>
                        </C.DataSmaller>
                        <C.DataSmaller onClick={logOut}>
                            <h3>Logout</h3> 
                        </C.DataSmaller>
                    </C.SmallerArea>
                </C.DataArea>
            </C.Container>
        </ContainerWeb>
    )
}