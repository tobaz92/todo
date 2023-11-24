import { TodoApi } from 'api/TodoApi'
export class TodoService {
    static getAll() {
        return TodoApi.fetchTodos()
    }
    static get(id) {}

    static add(data) {
        const userId = 1
        const completed = false
        const date = '2023-11-23'

        const values = {
            title: data.title,
            description: data.description,
            userId,
            date,
            completed,
        }
        return TodoApi.addTodo(values)
    }
    static remove(id) {
        console.log('remove', id)
        return TodoApi.deleteTodo(id)
    }
    static update(id, data) {
        return TodoApi.updateTodo(id, data)
    }
}
