import { useSelector } from 'react-redux'
import Login from './components/Login'
// import TodoApp from './containers/TodoApp'
import './styles/App.css'

export function App() {
    const isAuthenticated = useSelector((store) => store.USER.isAuthenticated)
    return (
        <>
            {!isAuthenticated && <Login />}
            {isAuthenticated && <h1>Todo App</h1>}
            {/* <TodoApp /> */}
        </>
    )
}
