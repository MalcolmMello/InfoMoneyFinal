import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    email: string;
    name: string,
    nickName: string,
    password: string,
    cpf: string,
    birthday: string,
    gender: string,
    InterAccount: string,
    InterPassword: string,
    InterCPF: string,
    XPAccount: string,
    XPPassword: string,
    XPCPF: string
}

type Action = {
    type: FormActions,
    payload: any
}

type ContextType = {
    state: State,
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    email: '',
    name: '',
    nickName: '',
    password: '',
    cpf: '',
    birthday: '',
    gender: '',
    InterAccount: '',
    InterPassword: '',
    InterCPF: '',
    XPAccount: '',
    XPPassword: '',
    XPCPF: ''
}



/*Context*/
const DataContext = createContext<ContextType | undefined>(undefined)

//Reducer
export enum FormActions {
    setEmail, 
    setName,
    setNickName,
    setPassword,
    setCpf,
    setBirthday,
    setGender,
    setInterAccount,
    setInterPassword,
    setInterCPF,
    setXPAccount,
    setXPPassword,
    setXPCPF
}

const dataReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setEmail:
            return{...state, email: action.payload}
        case FormActions.setName: {
            return{...state, name: action.payload}
        }
        case FormActions.setNickName: {
            return{...state, nickName: action.payload}
        }
        case FormActions.setPassword: {
            return{...state, password: action.payload}
        }
        case FormActions.setCpf: {
            return{...state, cpf: action.payload}
        }
        case FormActions.setBirthday: {
            return{...state, birthday: action.payload}
        }
        case FormActions.setGender: {
            return{...state, gender: action.payload}
        }
        case FormActions.setInterAccount: {
            return{...state, InterAccount: action.payload}
        }
        case FormActions.setInterPassword: {
            return{...state, setInterPassword: action.payload}
        }
        case FormActions.setInterCPF: {
            return{...state, setInterCPF: action.payload}
        }
        case FormActions.setXPAccount: {
            return{...state, XPAccount: action.payload}
        }
        case FormActions.setXPPassword: {
            return{...state, XPPassword: action.payload}
        }
        case FormActions.setXPCPF: {
            return{...state, XPCPF: action.payload}
        }
        default:
            return state;
    }
}

//Provider
export const DataProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(dataReducer, initialData)
    const value = { state, dispatch }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

//hook
export const useForm = () => {
    const context = useContext(DataContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do DataProvider')
    }
    return context;
}