import {makeAutoObservable,} from "mobx";
import TaskAPI from "../API/main.ts";
import TodoWidgetViewModel from "./TodoWidgetViewModel.tsx";
import {Temporal} from "@js-temporal/polyfill";
export const api = new TaskAPI();


class TodoStore {
    newValue: string = '';
    tasks: TodoWidgetViewModel[] = [];

    constructor() {
        makeAutoObservable(this);
        this.loadTasks();
    }

    async loadTasks() {
        try {
            const tasks = await api.getTasks();
            this.tasks = tasks.map((item) => new TodoWidgetViewModel(item));
            console.log(this.tasks);
        } catch (err) {
            console.log(err, ' не удалось получить таски');
        }
    }

    async addTask(value: string, date: Temporal.PlainDate | null) {
        try {
            const task = await api.createTask(value, date);
            console.log(new TodoWidgetViewModel(task));
            this.tasks.push(new TodoWidgetViewModel(task));
        } catch (err) {
            console.log(err, ' не удалось добавить таску');
        }
    }

    async deleteTodo(id: number) {
        try {
            const success = await api.deleteTask(id);
            if (success) {
                this.tasks = this.tasks.filter((task) => task.id !== id);
            } else {
                console.log('не удалось удалить таску');
            }
        } catch (err) {
            console.log(err, ' не удалось удалить таску');
        }
    }
}

export default TodoStore;