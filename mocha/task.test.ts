import { describe, it } from "mocha";
import { assert } from "chai";
import { stub } from "sinon"
import { TaskRepository } from "../repository/task";
import { TaskService } from "../service/task";
import { Task } from "../model/task";


describe("check pass", () => {
    it("1+1は2", () => {
        assert.equal(1+1, 2);
    })
})

describe("taskService", () => {
    // 実体を生成する
    const dummyRepo:TaskRepository = {
        listTask: ()=>[]
    }
    // テスト対象のクラスにモックの実体を食わせて生成
    const taskService = new TaskService(dummyRepo);
    // 実体の関数をstubを生成
    const stubListTask = stub(dummyRepo, 'listTask')
    // stubの返り値を設定
    stubListTask.returns([{
        id: 1,
        name: "task1",
        description: "this is task",
        isActive: true,
    }])

    let result:Task[];
    beforeEach(() => {
        result = taskService.listActiveTask()
    })

    it("長さ1の配列が得られる", () => {
        assert.equal(result.length, 1);
    })
})