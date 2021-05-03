//item: {id, task, editMode}
export const addTodo = (item) => {
    return {
        type: 'ADD',
        data: item,
    };
};

export const deleteTodo = (id) => {
    return {
        type: 'DELETE',
        id: id,
    };
};

export const updateTodo = (item) => {
    return {
        type: 'UPDATE',
        data: item,
    };
};

export const setEditMode = (id, editStatus) => {
    return {
        type: 'SET_EDIT_MODE',
        id: id,
        status: editStatus,
    };
};
