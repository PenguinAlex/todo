import { makeAutoObservable,} from "mobx";
import {createTodo, deleteTodoById, getAllTodos, updateTodoById} from "../API/main.ts";
import {TypeTodo} from "../types.ts";
import TodoWidgetViewModel from "./TodoWidgetViewModel.tsx";



class TodoStore {
    newValue: string=''
   todos: TodoWidgetViewModel[] =getAllTodos().map(item => new TodoWidgetViewModel(item))

    addTodo(value:string, date:string|null) {
       const newTodo = createTodo(value, date)
        this.todos.push(new TodoWidgetViewModel(newTodo))
    }

    // protected updateTodo(id: number, updatedTodo: TypeTodo) {
    //     const updated = updateTodoById(id, updatedTodo);
    //     if (updated) {
    //         const index = this.todos.findIndex((todo) => todo.id === id);
    //         if (index !== -1) {
    //             this.todos[index] = { ...this.todos[index], ...updatedTodo };
    //         }
    //     }
    // }

    deleteTodo(id: number) {
        const deleted = deleteTodoById(id);
        if (deleted) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        }
    }

    // toggleTodo(id: number) {
    //     const index = this.todos.findIndex(el => el.id === id)
    //     this.todos[index].isDone = !this.todos[index].isDone
    //     this.updateTodo(id, this.todos[index])
    // }


    // changeValue(id: number, value:string){
    //     const index = this.todos.findIndex(el => el.id === id)
    //     this.todos[index].value = value
    //     this.updateTodo(id, this.todos[index])
    // }

    constructor() {
        makeAutoObservable(this)
    }

}

export default TodoStore;