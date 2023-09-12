import {action, makeObservable, observable} from "mobx";

interface Todo{
    id:number,
    value:string,
    done: boolean
}
class TodoStore{
    todos : Todo[] = [{id:1, value: 'rarw', done: false}]

    addTodo(todo:Todo){
        this.todos.push(todo)
    }

    toggleTodo(id:number){
        const index = this.todos.findIndex(el => el.id === id)
        this.todos[index].done = !this.todos[index].done
    }
    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo:action,
            toggleTodo:action
        })
    }

}

export default TodoStore;