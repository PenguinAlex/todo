

// Массив с начальными задачами
import {Todo} from "../types.ts";

const todos: Todo[] = [
    { id: 1, value: 'Завершить отчет по проекту', done: false, isChanging:false },
    { id: 2, value: 'Подготовить презентацию для совещания', done: false, isChanging:false },
    { id: 3, value: 'Сделать покупки в продуктовом магазине', done: false, isChanging:false },
    { id: 4, value: 'Записаться на тренировку в спортзал', done: false, isChanging:false },
    { id: 5, value: 'Прочитать главу из новой книги', done: false, isChanging:false },
    { id: 6, value: 'Подготовить ужин для гостей', done: false, isChanging:false },
    { id: 7, value: 'Провести собрание с командой', done: false, isChanging:false },
    { id: 8, value: 'Почистить квартиру', done: false, isChanging:false },
    { id: 9, value: 'Записать новую песню', done: false, isChanging:false },
    { id: 10, value: 'Изучить новую программу на работе', done: false, isChanging:false }

];

// Функция для создания новой задачи
function createTodo(value:string): Todo {
    const id = Date.now()
    const createdTodo: Todo = {id:id, value:value, done:false, isChanging:false};
    todos.push(createdTodo);
    return createdTodo;
}

// Функция для получения всех задач
function getAllTodos(): Todo[] {
    return todos;
}

// Функция для обновления задачи по ID
function updateTodoById(id: number, updatedTodo: Todo): Todo | null {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
        return null; // Задача не найдена
    }
    todos[index] = { ...todos[index], ...updatedTodo };
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
