import * as C from './styles'
import { useForm, FormActions } from '../../contexts/DataContext'
import { Link } from 'react-router-dom'
import { ContainerWeb } from '../../components/ContainerWeb'
import { NewsArea } from '../../components/NewsArea'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
export const BeginPage = () => {
    const history = useHistory()
    const {state, dispatch} = useForm()
    
    const handleReferFriend = () => {
        history.push('/referFriend')
    }

    const handleAddAccount = () => {
        history.push('/AddAccount')
    }
    return (
        <ContainerWeb>
            <C.Header>
                <C.HeaderData>
                    <div className="logo">
                        <img src="https://immais.com/assets/images/im.logo.png" alt="" />
                    </div>
                    <div className="user">
                        <p className="pUser">Olá, {state.nickName}</p>
                        <Link to="/userPerfil">Ver Perfil</Link>
                    </div>
                </C.HeaderData>
            </C.Header>
            <C.ContainerWeb >
                <div className="add" >
                    <p>Conecte suas contas! <br/> Dê adeus às planilhas.</p>
                    <button onClick={handleAddAccount}>Adicionar Conta</button>
                </div>
                <NewsArea
                    img="https://www.infomoney.com.br/wp-content/uploads/2020/07/GettyImages-827615404.jpg?w=755&quality=70&strip=all"
                    newsTitle="Ifix tem terceiro mês de queda em outubro; fundo Tordesilhas lidera ganhos e SP Downtown é destaque negativo"
                    newsText="Aumento no ritmo de elevação da Selic e ameaça fiscal influenciaram no desempenho do índice, que caiu 1,47% em outubro"
                />
                <NewsArea
                    img="https://www.infomoney.com.br/wp-content/uploads/2020/07/GettyImages-827615404.jpg?w=755&quality=70&strip=all"
                    newsTitle="Ifix tem terceiro mês de queda em outubro; fundo Tordesilhas lidera ganhos e SP Downtown é destaque negativo"
                    newsText="Aumento no ritmo de elevação da Selic e ameaça fiscal influenciaram no desempenho do índice, que caiu 1,47% em outubro"
                />
                <NewsArea
                    img="https://www.infomoney.com.br/wp-content/uploads/2020/07/GettyImages-827615404.jpg?w=755&quality=70&strip=all"
                    newsTitle="Ifix tem terceiro mês de queda em outubro; fundo Tordesilhas lidera ganhos e SP Downtown é destaque negativo"
                    newsText="Aumento no ritmo de elevação da Selic e ameaça fiscal influenciaram no desempenho do índice, que caiu 1,47% em outubro"
                />
                <NewsArea
                    img="https://www.infomoney.com.br/wp-content/uploads/2020/07/GettyImages-827615404.jpg?w=755&quality=70&strip=all"
                    newsTitle="Ifix tem terceiro mês de queda em outubro; fundo Tordesilhas lidera ganhos e SP Downtown é destaque negativo"
                    newsText="Aumento no ritmo de elevação da Selic e ameaça fiscal influenciaram no desempenho do índice, que caiu 1,47% em outubro"
                />
                <div className="seeMore">
                    <div className="seeMoreContent">
                        <Link to="/newsPage">Ver mais </Link> <img src="https://img.icons8.com/material-outlined/24/ffffff/arrow.png"/>
                    </div>
                </div>
                <div className="referFriend" onClick={handleReferFriend}>
                    <div className="referFriendContent">
                        <h1>Indique seus amigos</h1>
                        <p>ajude os seus amigos a tomarem <br/> melhores decisões financeiras.</p>
                        <button>Mais detalhes</button>
                    </div>
                </div>
            </C.ContainerWeb>
        </ContainerWeb>
    )
}