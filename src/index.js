import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './application/store'
import { App } from './presentation/App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
)
