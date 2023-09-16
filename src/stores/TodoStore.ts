import {makeAutoObservable,} from "mobx";
import {createTodo, deleteTodoById, getAllTodos} from "../API/main.ts";
import TodoWidgetViewModel from "./TodoWidgetViewModel.tsx";
import {Temporal} from "@js-temporal/polyfill";


class TodoStore {
    newValue: string = ''
    todos: TodoWidgetViewModel[] = this.parseTodos()

    protected parseTodos(): TodoWidgetViewModel[] {
        return getAllTodos().map(item => new TodoWidgetViewModel(item))
    }

    addTodo(value: string, date: Temporal.PlainDate | null) {
        const newTodo = createTodo(value, date)
        this.todos.push(new TodoWidgetViewModel(newTodo))
    }


    deleteTodo(id: number) {
        deleteTodoById(id);
        this.todos = this.parseTodos()
    }


    constructor() {
        makeAutoObservable(this)
    }

}

export default TodoStore;