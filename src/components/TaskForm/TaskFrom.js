import React, { useState } from 'react';
import TaskService from '../services/TaskService';

const TaskForm = ({ loadTasks }) => {
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await TaskService.addTask({ name: task });
        setTask('');
        loadTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add new task"
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
