import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add_todo, del_todo, edit_todo, update_todo } from '../Container/Services/Reducres/Todoreducer'

const Todo = () => {
    const [val, setVal] = useState('')
    const [update, setUpdate] = useState(false)
    const [index, setIndex] = useState('')

    const dispatch = useDispatch()
    const myarr = useSelector((state) => state.todo.arry)

    const inputval = (e) => {
        setVal(e.target.value)

    }
    const submit_btn = () => {
        dispatch(Add_todo(val))
        setVal('')
    }
    const Del_btn = (index) => {

        dispatch(del_todo(index))
    }
    const edit_btn = (item, index) => {
        setVal(item)
        setUpdate(true)
        setIndex(index)
    }

    const update_todo_f = (index) => {
        let data = [...myarr]
        data.splice(index, 1, val)
        dispatch(update_todo(data))
        setUpdate('')


    }

    return (
        <div className="container">
            <h1>TodoList </h1>
            <input onChange={inputval} className='input' type="text" value={val} />
            {!update ? <button onClick={submit_btn} className='btn-primary'>Add task</button> : <button className='btn-primary' onClick={() => update_todo_f(index)}>Update</button>}
            {myarr.map((item, index) => {
                return (
                    <ul><li key={index}>{item} <button onClick={() => Del_btn(index)} className='btn-danger'>Delete</button>
                        <button className='btn-danger' onClick={() => edit_btn(item, index)}>Edit</button>

                    </li></ul>
                )

            })}
        </div>

    )

}

export default Todo