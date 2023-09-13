import {action, makeAutoObservable, makeObservable, observable} from "mobx";

interface Todo {
    id: number,
    value: string,
    done: boolean
}

class TodoStore {
    todos: Todo[] = [{id: 1, value: 'rarw', done: false}]

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }

    toggleTodo(id: number) {
        console.log(id, this.todos)
        const index = this.todos.findIndex(el => el.id === id)
        console.log(index)
        this.todos[index].done = !this.todos[index].done
        console.log(this.todos[index].done)
    }

    constructor() {
        makeAutoObservable(this)
    }

}

export default TodoStore;