import * as C from './styles'
import { useState } from 'react'
import { Item } from '../../types/Item'
import { categories } from '../../data/categories'

type Props = {
    onAdd: (item: Item) => void
}

export const AddItem = ({onAdd}: Props) => {
    const [data, setData] = useState('')
    const [categoria, setCategoria] = useState('')
    const [titulo, setTitulo] = useState('')
    const [price, setPrice] = useState('')
    const [error, setError] = useState(false)

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {
        if(data === '') {
            setError(true)
        }
        if(categoria === '') {
            setError(true)
        }
        if(titulo === '') {
            setError(true)
        }
        if(price === '') {
            setError(true)
        } else {
            onAdd({
                date: new Date(data),
                category: categoria,
                title: titulo,
                value: parseInt(price)
            })
            setData('');
            setCategoria('');
            setTitulo('');
            setPrice('');
            setError(false);
        }
    }

    return (
        <C.Container>
            <C.Input
                type="date"
                value={data}
                onChange={e=>setData(e.target.value)}
                required
            />
            <C.Select required value={categoria} onChange={e=>setCategoria(e.target.value)}>
                <>
                    <option></option>
                    {categoryKeys.map((key, index) => (
                        <option key={index} value={key}>{categories[key].title}</option>
                    ))}
                </>
            </C.Select>
            <C.Input
                type="text"
                value={titulo}
                onChange={e=>setTitulo(e.target.value)}
                required
                placeholder="Título"
            />
            <C.Input
                type="number"
                value={price}
                onChange={e=>setPrice(e.target.value)}
                required
                placeholder="Valor"
            />
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}