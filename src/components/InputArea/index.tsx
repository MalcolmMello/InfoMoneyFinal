import { ReactNode } from 'react'
import { Header } from '../Header/styles'
import * as C from './styles'


type Props = {
    children: ReactNode
}

export const InputArea = ({children}: Props) => {
    return (
        <C.InputArea>
            {children}
        </C.InputArea>
    )
}