import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
    return (
        <div>
            <h1>To-Do List Application</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default App;
