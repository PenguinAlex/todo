// Массив с начальными задачами
import {TypeTodo} from "../types.ts";
import {Temporal} from "@js-temporal/polyfill";

const todos: TypeTodo[] = [
    {id: 1, value: 'Завершить отчет по проекту', isCompleted: false, date: Temporal.PlainDate.from('2023-12-12')},
    {
        id: 2,
        value: 'Подготовить презентацию для совещания',
        isCompleted: false,
        date: Temporal.PlainDate.from('2023-12-12')
    },
    {
        id: 3,
        value: 'Сделать покупки в продуктовом магазине',
        isCompleted: false,
        date: Temporal.PlainDate.from('2023-12-12')
    },
    {
        id: 4,
        value: 'Записаться на тренировку в спортзал',
        isCompleted: false,
        date: Temporal.PlainDate.from('2023-12-12')
    },
    {id: 5, value: 'Прочитать главу из новой книги', isCompleted: false, date: Temporal.PlainDate.from('2023-12-12')},
    {id: 6, value: 'Подготовить ужин для гостей', isCompleted: false, date: Temporal.PlainDate.from('2023-12-12')},
    {id: 7, value: 'Провести собрание с командой', isCompleted: false, date: Temporal.PlainDate.from('2023-12-12')},
    {id: 8, value: 'Почистить квартиру', isCompleted: false, date: Temporal.PlainDate.from('2023-12-12')},
    {id: 9, value: 'Записать новую песню', isCompleted: false, date: Temporal.PlainDate.from('2023-12-12')},
    {
        id: 10,
        value: 'Изучить новую программу на работе',
        isCompleted: false,
        date: Temporal.PlainDate.from('2023-12-12')
    }

];

// Функция для создания новой задачи
function createTodo(value: string, date: Temporal.PlainDate | null): TypeTodo {
    const id = Date.now()

    const createdTodo: TypeTodo = {id: id, value: value, isCompleted: false, date: date};
    todos.push(createdTodo);
    return createdTodo;
}

// Функция для получения всех задач
function getAllTodos(): TypeTodo[] {
    return todos;
}

// Функция для обновления задачи по ID
function updateTodoById(id: number, updatedTodo: TypeTodo): TypeTodo | null {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
        return null; // Задача не найдена
    }
    todos[index] = {...todos[index], ...updatedTodo};

    return todos[index];

}

// Функция для удаления задачи по ID
function deleteTodoById(id: number): boolean {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
        return false; // Задача не найдена
    }
    todos.splice(index, 1);

    return true;
}

export {createTodo, updateTodoById, getAllTodos, deleteTodoById}
