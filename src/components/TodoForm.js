import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo, setEditMode } from '../actions/index';
import { v1 as uuidv1 } from 'uuid';

const TodoForm = ({ todo, editMode, pageType }) => {
    const [task, setTask] = useState(() => (editMode ? todo.task : ''));
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        //add an object to our todos

        let todoID = editMode ? todo.id : uuidv1();
        let todoItem = {
            id: todo.id,
            task: task,
            editMode: false,
        };

        editMode ? dispatch(updateTodo(todoItem)) : dispatch(addTodo(todoItem));

        //clear fields
        setTask('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>Todo</span>
                </div>
                <textarea
                    className='form-control'
                    placeholder='Enter todo item'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    aria-label='With textarea'
                ></textarea>

                {editMode && pageType === '1' ? (
                    <>
                        <div className='input-group-append'>
                            <button
                                className='btn btn-outline-info'
                                type='submit'
                                id='button-addon2'
                            >
                                Edit
                            </button>
                        </div>
                        <div className='input-group-append'>
                            <button
                                className='btn btn-outline-danger'
                                onClick={() =>
                                    dispatch(setEditMode(todo.id, false))
                                }
                                type='button'
                                id='button-addon2'
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <div className='input-group-append'>
                        <button
                            className='btn btn-outline-secondary'
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                )}
            </div>
        </form>
    );
};

export default TodoForm;
