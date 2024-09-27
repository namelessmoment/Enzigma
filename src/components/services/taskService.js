import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tasks'; // Replace with your API URL

class TaskService {
    static async getAllTasks() {
        return await axios.get(API_URL);
    }

    static async addTask(task) {
        return await axios.post(API_URL, task);
    }

    static async deleteTask(id) {
        return await axios.delete(`${API_URL}/${id}`);
    }
}

export default TaskService;
