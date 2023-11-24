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
}
