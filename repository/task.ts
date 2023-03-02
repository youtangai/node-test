import { Task } from '../model/task';

export interface TaskRepository {
    getTask(id: number): Task
    listTask(): Task[]
}