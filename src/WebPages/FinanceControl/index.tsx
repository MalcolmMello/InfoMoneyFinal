import * as C from './styles'
import { Title } from '../../components/Title/styles'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useForm } from '../../contexts/DataContext';
import { items } from '../../data/items'; 
import { Item } from '../../types/Item'
import { getCurrentMonth } from '../../helpers/dateFilter'
import { filterListByMonth } from '../../helpers/dateFilter'
import { TableItem } from '../../components/TableItem';
import { InfoArea } from '../../components/InfoArea';
import { categories } from '../../data/categories';
import { AddItem } from '../../components/AddItem';




export const FinanceControl = () => {
    const history = useHistory()
    const {state} = useForm()
    const [list, setList] = useState(items);
    const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    
    useEffect(()=>{
        if(state.name === '' && state.InterAccount === '') {
            history.push('/SignUp')
        }
    },[state])

    useEffect(()=>{
      setFilteredList( filterListByMonth(list, currentMonth) ) 
    }, [list, currentMonth])

    useEffect(()=>{
        let incomeCount = 0;
        let expenseCount = 0;

        for(let i in filteredList) {
            if(categories[filteredList[i].category].expense) {
                expenseCount += filteredList[i].value
            } else {
                incomeCount += filteredList[i].value
            }
        }
        setIncome(incomeCount);
        setExpense(expenseCount);
    }, [filteredList])

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth)
    }

    const handleAddItem = (item: Item) => {
        let newList = [...list];
        newList.push(item);
        setList(newList)
      }

    const backPage = () => {
        history.push('/beginPage')
    }
    return (
        <C.Container>
            <C.Header>
                <C.HeaderContent>
                    <img src="https://img.icons8.com/material-outlined/24/fa314a/long-arrow-left.png" onClick={backPage}/><Title>Controle Financeiro</Title>
                </C.HeaderContent>
            </C.Header>
            <InfoArea
                currentMonth={currentMonth}
                onMonthChange={handleMonthChange}
                income={income}
                expense={expense}
            />
            <C.FinanceContent>
                <C.FinanceControlScreen>
                    <thead>
                        <tr>
                            <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                            <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                            <C.TableHeadColumn>Título</C.TableHeadColumn>
                            <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredList.map((item, index)=>(
                            <TableItem key={index} item={item}/>
                        ))}
                    </tbody>
                </C.FinanceControlScreen>

                <AddItem onAdd={handleAddItem}/>

            </C.FinanceContent>
        </C.Container>
    )
}