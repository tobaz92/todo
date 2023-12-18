import { useSelector } from 'react-redux'
import Login from './components/Login'
import './styles/fonts.css'
import './styles/App.css'
import TodoApp from './containers/TodoApp'

export function App() {
    const isAuthenticated = useSelector((store) => store.USER.isAuthenticated)
    return <>{isAuthenticated ? <TodoApp /> : <Login />}</>
}
