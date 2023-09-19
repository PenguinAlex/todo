import {TypeTask} from "../types.ts";
import {makeAutoObservable} from "mobx";
import {Temporal} from "@js-temporal/polyfill";
import {api} from "./TodoStore.ts";

class TodoWidgetViewModel {
    constructor(public item: TypeTask | null) {
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

     private async update(){
       try{
           await  api.updateTask( {date: this.date, id: this.id, isCompleted: this.isCompleted, value: this.draft})
       } catch (err){
           console.log(err, 'не удалось обновить таску :(')
       }
    }
    toggleCompleted() {
        this.isCompleted = !this.isCompleted
        this.update()

    }

    onDateChange(date: Temporal.PlainDate) {
        this.date = date
        this.update()
    }

    onDraftChange(draft: string) {
        this.draft = draft
        this.update()
    }

}

export default TodoWidgetViewModel;