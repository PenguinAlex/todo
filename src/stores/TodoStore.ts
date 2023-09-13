import { makeAutoObservable,} from "mobx";
import {createTodo, deleteTodoById, getAllTodos, updateTodoById} from "../API/main.ts";
import {Todo} from "../types.ts";



class TodoStore {
    newValue: string=''
   todos: Todo[] =getAllTodos()

    addTodo(value:string) {
       const newTodo = createTodo(value)
        this.todos.push(newTodo)
    }

    protected updateTodo(id: number, updatedTodo: Todo) {
        const updated = updateTodoById(id, updatedTodo);
        if (updated) {
            const index = this.todos.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                this.todos[index] = { ...this.todos[index], ...updatedTodo };
            }
        }
    }

    deleteTodo(id: number) {
        const deleted = deleteTodoById(id);
        if (deleted) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        }
    }

    toggleTodo(id: number) {
        const index = this.todos.findIndex(el => el.id === id)
        this.todos[index].done = !this.todos[index].done
        this.updateTodo(id, this.todos[index])
    }
    toggleChanging(id: number) {
        const index = this.todos.findIndex(el => el.id === id)
        this.todos[index].isChanging = !this.todos[index].isChanging
        this.updateTodo(id, this.todos[index])
    }

    changeValue(id: number, value:string){
        const index = this.todos.findIndex(el => el.id === id)
        this.todos[index].value = value
        this.updateTodo(id, this.todos[index])
    }

    constructor() {
        makeAutoObservable(this)
    }

}

export default TodoStore;