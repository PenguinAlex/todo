import {TypeTodo} from "../types.ts";
import {makeAutoObservable} from "mobx";
import {Temporal} from "@js-temporal/polyfill";

class TodoWidgetViewModel {
    constructor(public item: TypeTodo| null) {
        makeAutoObservable(this);
        if (item){
            this.id = item.id
            this.draft = item.value
            this.isCompleted = item.isCompleted
            if (item.date){
                this.date = Temporal.PlainDate.from(item.date)
            }
        }
    }
    id: number = -1
    draft: string = ''
    date: Temporal.PlainDate | null = null
    isCompleted: boolean = false
    
}

export default TodoWidgetViewModel;