import React, {useState} from 'react';

const Display = (props)=>{
    const {todoList, setTodoList}=props


    const toggleCheckbox =(todoItem) =>{
        console.log(todoItem)
        const updatedTodoItems = todoList.map((ti)=>{
            if(todoItem ===ti){
                ti.completed=!ti.completed
            }
            return ti
        })
        setTodoList(updatedTodoItems)
    }

    const deleteTodoItem=(todoItem)=>{
        const updatedTodoItems = todoList.filter((ti)=> todoItem !==ti)
        setTodoList(updatedTodoItems)
    }

    return (
        <div>
            {
                todoList && todoList.length > 0?
                todoList.map((a,idx)=>{
                    return (
                        <div key={idx}>
                            <div>
                            <p>Todo: {a.todo}</p>
                            <p>Completed: 
                            <input type='checkbox' name="completed"
                            checked={a.completed} onChange={() =>
                            toggleCheckbox(a)}/>
                            {/* {
                                a.completed?
                                <p>completed</p>:
                                null
                            } */}
                            </p>
                            </div>
                            <button onClick={()=> deleteTodoItem(a)}>
                                Delete</button>
                        </div>
                    )
                }):
                null
            }
        </div>
    )
}
export default Display