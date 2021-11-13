import { ReactNode } from 'react'
import * as C from './styles'

type Props = {
    children: ReactNode,
    img: string
}

export const StoryItem = ({children, img}: Props) => {
    return (
        <C.Story background={img}>
            {children}
        </C.Story>
    )
}