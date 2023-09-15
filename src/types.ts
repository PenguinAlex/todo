import {Temporal} from "@js-temporal/polyfill";

export interface TypeTodo {
    id: number,
    value: string,
    isCompleted: boolean,
    date:Temporal.PlainDate|null
}