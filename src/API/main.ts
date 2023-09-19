import {Temporal} from "@js-temporal/polyfill";
import {TypeTask} from "../types.ts";


class TaskAPI {
    private storageKey = 'tasks';

    private getTasksFromLocalStorage(): TypeTask[] {
        const tasksString = localStorage.getItem(this.storageKey);
        if (tasksString) {
            console.log(JSON.parse(tasksString) as TypeTask[])
            return JSON.parse(tasksString) as TypeTask[];
        }
        return [];
    }

    private saveTasksToLocalStorage(tasks: TypeTask[]): void {
        const tasksString = JSON.stringify(tasks);
        localStorage.setItem(this.storageKey, tasksString);
    }

    // Получить список всех задач
    getTasks(): Promise<TypeTask[]> {
        return new Promise((resolve) => {
            const tasks = this.getTasksFromLocalStorage();
            resolve(tasks);
        });
    }

    // Создать новую задачу
    createTask(value: string, date: Temporal.PlainDate|null): Promise<TypeTask> {
        return new Promise((resolve) => {
            const tasks = this.getTasksFromLocalStorage();
            const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
            const newTask: TypeTask = {id:id, value:value, date:date, isCompleted:false};
            tasks.push(newTask);
            this.saveTasksToLocalStorage(tasks);
            resolve(newTask);
        });
    }

    // Обновить задачу
    updateTask(updatedTask: TypeTask): Promise<TypeTask|null> {
        return new Promise((resolve) => {
            const tasks = this.getTasksFromLocalStorage();
            const index = tasks.findIndex((task) => task.id === updatedTask.id);
            if (index !== -1) {
                tasks[index] = updatedTask;
                this.saveTasksToLocalStorage(tasks);
                resolve(updatedTask);
            }
            resolve(null);
        });
    }

    // Удалить задачу
    deleteTask(id: number): Promise<boolean> {
        return new Promise((resolve) => {
            const tasks = this.getTasksFromLocalStorage();
            const index = tasks.findIndex((task) => task.id === id);
            if (index !== -1) {
                tasks.splice(index, 1);
                this.saveTasksToLocalStorage(tasks);
                resolve(true);
            }
            resolve(false);
        });
    }
}

export default TaskAPI;