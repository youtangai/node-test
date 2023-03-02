import { TaskRepository } from "../repository/task"
import { TaskService } from "../service/task"
import { Task } from "../model/task"

let feedTask: Task[] = [
    {
        id: 1,
        name: "task1",
        description: "this is task1",
        isActive: false
    },
    {
        id: 2,
        name: "task2",
        description: "this is task2",
        isActive: true
    },
    {
        id: 3,
        name: "task3",
        description: "this is task3",
        isActive: false
    },
    {
        id: 4,
        name: "task4",
        description: "this is task4",
        isActive: true
    },
];

describe("TaskService", () => {
    const listMock = jest.fn().mockReturnValue(feedTask);
    const mockTaskRepo = jest.fn<TaskRepository, []>().mockImplementation(() => ({
        listTask: listMock,
    }));
    const taskSrv = new TaskService(mockTaskRepo());

    describe("listTask", () => {
        test("長さ4の配列が得られる", () => {
            const result = taskSrv.listTask();
            expect(result.length).toBe(4);
        })
    })
})