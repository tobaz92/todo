import axios from 'axios'

export class SharedApi {
    static async getShared() {
        try {
            const config = {
                method: 'get',
                url: `http://localhost:3200/sharedTodos`,
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'no-cors',
            }

            const response = await axios(config)

            return response.data
        } catch (error) {
            console.error('Error get users:', error)
            throw error
        }
    }
}
