import { UserApi } from 'api/UserApi'

export const getUsers = async (dispatch) => {
    try {
        const listTodos = await UserApi.gethUsers()
        dispatch(setTodoList(listTodos))
    } catch (error) {
        console.log(error)
    }
}
