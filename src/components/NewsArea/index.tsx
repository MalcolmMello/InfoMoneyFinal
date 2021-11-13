import * as C from './styles'

type Props = {
    img: string,
    newsTitle: string,
    newsText: string
}

export const NewsArea = ({img, newsTitle, newsText}: Props) => {
    
    return (
        <C.Container>
            <div className="newsImage">
                <img src={img} alt=""/>
            </div>
            <div className="newsContent">
                <p className="title">{newsTitle}</p>
                <p>{newsText}</p>
            </div>
        </C.Container>
    )
}