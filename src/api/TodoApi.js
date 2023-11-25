import axios from 'axios'

export class TodoApi {
    static async fetchTodos() {
        try {
            const config = {
                method: 'get',
                url: `http://localhost:3200/todos`,
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'no-cors',
            }

            const response = await axios(config)

            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    // TODO: In progress, move to UserApi.js
    static async fetchUsers() {
        try {
            const config = {
                method: 'get',
                url: `http://localhost:3200/users`,
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'no-cors',
            }

            const response = await axios(config)

            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    static async addTodo(data) {
        const values = {
            title: data.title,
            description: data.description,
            userId: data.userId,
            completed: data.completed || false,
            date: data.date,
        }

        try {
            const response = await axios.post(
                'http://localhost:3200/todos',
                values,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            )

            return response
        } catch (error) {
            console.error('Error adding todo:', error)
            throw error
        }
    }

    static async updateTodo(id, data) {
        try {
            const response = await axios.put(
                `http://localhost:3200/todos/${id}`,
                data,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            )

            return response
        } catch (error) {
            console.error('Error adding todo:', error)
            throw error
        }
    }

    static async deleteTodo(id) {
        try {
            const response = await axios.delete(
                `http://localhost:3200/todos/${id}`,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            )

            return response
        } catch (error) {
            console.error('Error adding todo:', error)
            throw error
        }
    }
}
