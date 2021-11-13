import { ReactNode } from 'react'
import * as C from './styles'

type Props = {
    children: ReactNode
}

export const Title = ({children}: Props) => {
    return (
        <C.Title>
            {children}
        </C.Title>
    )
}