import axios from 'axios'

export class UserApi {
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
}
