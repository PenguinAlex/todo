import {Temporal} from "@js-temporal/polyfill";

export interface TypeTask {
    id: number,
    value: string,
    isCompleted: boolean,
    date:Temporal.PlainDate|null
}