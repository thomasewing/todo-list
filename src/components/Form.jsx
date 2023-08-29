import React, {useState} from 'react'

const Form = (props) =>{
    const {todoList, setTodoList} = props
    const [todoItem, setTodoItem] = useState({
        todo: '',
        completed: false
    })
    const [error, setError] = useState('')

    const handleTodoItem = (e) => {
        console.log(e.target.type);
        if(e.target.type === 'checkbox'){
            setTodoItem({...todoItem, completed:!todoItem.completed})
        }
        else{
            setTodoItem({...todoItem, [e.target.name]: e.target.value})
        }
        // setTodoItem({...todoItem, [e.target.name]: e.target.value})
    }

    const createTodoItem = (event) => {
        event.preventDefault();
        if (todoItem.todo.length < 2) {
            setError('Please enter more than 1 character')
        }
        else {
            setError('')
            setTodoList([...todoList, todoItem])
            setTodoItem({
                todo: '',
                completed: false
            })
        }
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={createTodoItem}>
                {
                    error ?
                    <p>{error}</p> :
                    null
                }
                <label htmlFor="todo">To do: </label>
                <input type="text" value={todoList.todo} onChange={handleTodoItem} name="todo"/>
                {/* {
                    todoList.todo.length < 2 && todoList.todo.length >0 ?
                    <p>Todo must be more than 1 character</p> :
                    null
                } */}
                <label htmlFor="completed">Completed</label>
                <input type="checkbox"name="completed" onChange={handleTodoItem} checked={todoItem.completed}/>
                <button >Add Todo</button>
            </form>
        </div>
    )

}

export default Form;