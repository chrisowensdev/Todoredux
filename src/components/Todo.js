import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Paper } from './Styles';

const Todo = () => {
    return (
        <>
            <div className='row mt-5'>
                <div className='col-6 offset-3'>
                    <h1 className='text-center'>ToDo List</h1>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-6 offset-3'>
                    <TodoForm pageType='0' editMode={false} />
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col-6 offset-3'>
                    <TodoList />
                </div>
            </div>
        </>
    );
};

export default Todo;
