import TaskTypes from './task.types';

export const getTasks = tasks => ({
    type : TaskTypes.GET_TASKS,
    payload: tasks
});

export const addTasks = tasks => ({
    type: TaskTypes.ADD_TASK,
    payload: tasks
});

export const toggleForm = () => ({
    type: TaskTypes.TOGGLE_FORM
});

export const getId = id => ({
    type: TaskTypes.GET_ID,
    payload: id
});