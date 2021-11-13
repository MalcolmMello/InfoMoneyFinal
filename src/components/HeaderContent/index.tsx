import { ReactNode } from 'react'
import * as C from './styles'
import { useHistory } from 'react-router'

type Props = {
    children: ReactNode
}


export const HeaderContent = ({children}: Props)=> {
    const history = useHistory() 
    
    return (
        <C.Container>
            {children}
        </C.Container>
    )
}