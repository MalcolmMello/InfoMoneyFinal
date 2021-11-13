import * as C from './styles'
import { ContainerWeb } from '../../components/ContainerWeb'
import { Title } from '../../components/Title/styles'
import { NewsArea } from '../../components/NewsArea'
import { StoryItem } from '../../components/StoryItem'
import { CategoryItem } from '../../components/CategoryItem'
import { HeaderContent } from '../../components/HeaderContent'
import { HeaderWeb } from '../../components/HeaderWeb'

export const newsPage = () => {
    return (
        <ContainerWeb>
            <HeaderWeb>
                <HeaderContent>
                    <div className="title">
                        <Title>Notícias</Title>
                    </div>
                    <C.Categories>
                        <CategoryItem>Últimas</CategoryItem>
                        <CategoryItem>Mercados</CategoryItem>
                        <CategoryItem>Onde Investir</CategoryItem>
                        <CategoryItem>Investimentos</CategoryItem>
                    </C.Categories>
                </HeaderContent>
            </HeaderWeb>
            <C.StoryArea>
                <C.StoryContent>
                    <StoryItem img="https://img.icons8.com/nolan/96/bitcoin.png">
                        
                    </StoryItem>
                    <p>Criptos</p>
                    <p>29/10</p>
                </C.StoryContent>
                <C.StoryContent>
                    <StoryItem img="https://img.icons8.com/nolan/96/bitcoin.png">
                        
                    </StoryItem>
                    <p>Criptos</p>
                    <p>29/10</p>
                </C.StoryContent>
                <C.StoryContent>
                    <StoryItem img="https://img.icons8.com/nolan/96/bitcoin.png">
                        
                    </StoryItem>
                    <p>Criptos</p>
                    <p>29/10</p>
                </C.StoryContent>
                <C.StoryContent>
                    <StoryItem img="https://img.icons8.com/nolan/96/bitcoin.png">
                        
                    </StoryItem>
                    <p>Criptos</p>
                    <p>29/10</p>
                </C.StoryContent>
            </C.StoryArea>
            <C.Container>
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
            </C.Container>
        </ContainerWeb>
    )
}
