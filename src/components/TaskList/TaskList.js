import React, { useEffect, useState } from 'react';
import TaskService from '../services/TaskService';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const response = await TaskService.getAllTasks();
        setTasks(response.data);
    };

    const deleteTask = async (id) => {
        await TaskService.deleteTask(id);
        loadTasks();
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
