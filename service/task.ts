import { TaskRepository } from '../repository/task';
import { Task } from '../model/task';

export class TaskService {
    private taskRepository: TaskRepository
    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository
    }

    listTask():Task[] {
        return this.taskRepository.listTask();
    }

    getTask(id: number):Task {
        return this.taskRepository.getTask(id);
    }

    getActiveTask(): Task[] {
        const tasks = this.taskRepository.listTask();
        return tasks.filter(task => task.isActive)
    }
}