import { Task } from '../model/task';

export interface TaskRepository {
    listTask(): Task[]
}