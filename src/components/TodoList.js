import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { ULHover } from './Styles';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return (
        <div className='bg-white p-3'>
            <ULHover>
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />;
                })}
            </ULHover>
        </div>
    );
};

export default TodoList;
