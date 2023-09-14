import TodoStore from "./TodoStore.ts";
import {injectStores} from "@mobx-devtools/tools";

const todoStore = new TodoStore();
injectStores({
    todoStore,
})

export {todoStore,}