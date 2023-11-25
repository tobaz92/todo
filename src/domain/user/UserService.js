import { UserApi } from 'api/UserApi'

export const getTodos = async (dispatch) => {
    try {
        const listTodos = await UserApi.fetchUsers()
        dispatch(setTodoList(listTodos))
    } catch (error) {
        console.log(error)
    }
}
