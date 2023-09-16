import {TypeTodo} from "../types.ts";
import {makeAutoObservable} from "mobx";
import {Temporal} from "@js-temporal/polyfill";
import {updateTodoById} from "../API/main.ts";

class TodoWidgetViewModel {
    constructor(public item: TypeTodo | null) {
        makeAutoObservable(this);
        if (item) {
            if(this.id === -1){
                this.id = Date.now()
            }
            this.id = item.id
            this.draft = item.value
            this.isCompleted = item.isCompleted
            if (item.date) {
                this.date = Temporal.PlainDate.from(item.date)
            }
        }
    }

    id: number = -1
    draft: string = ''
    date: Temporal.PlainDate | null = null
    isCompleted: boolean = false

    toggleCompleted() {
        console.log(this.isCompleted)
        this.isCompleted = !this.isCompleted
        console.log(this.isCompleted)

        updateTodoById(this.id, {date: this.date, id: this.id, isCompleted: this.isCompleted, value: this.draft})
        console.log(this.isCompleted)

    }

    onDateChange(date: Temporal.PlainDate) {
        this.date = date
        updateTodoById(this.id, {date: this.date, id: this.id, isCompleted: this.isCompleted, value: this.draft})
    }

    onDraftChange(draft: string) {
        this.draft = draft
        updateTodoById(this.id, {date: this.date, id: this.id, isCompleted: this.isCompleted, value: this.draft})

    }

}

export default TodoWidgetViewModel;