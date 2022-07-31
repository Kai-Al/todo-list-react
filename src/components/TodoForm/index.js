import React from 'react';
import "./TodoForm.css"
import { TodoContext } from '../TodoContext';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);


    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }


    return (
        <div className="TodoForm">
        <form onSubmit={onSubmit}>
            <textarea 
            value = {newTodoValue}
            onChange = {onChange}
            type="text" 
            placeholder="Agrega una tarea"
            />
            <div className='TodoForm-buttonContainer'>
            <button 
            onClick={onCancel} 
            type="button"
            className='TodoForm-button TodoForm-button--cancel'
            >
                Cancelar
            </button>
            <button 
            type="submit"
            className='TodoForm-button TodoForm-button--add'
            >
                Agregar
            </button>
            </div>
        </form>
        </div>
    );
}

export { TodoForm };