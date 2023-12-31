import "./App.css"

import TodoList from "./components/TodoList"
import UserList from "./components/UserList"

function App() {
    return (
        <>
            <h1>React TypeScript</h1>
            <UserList />
            <hr />
            <TodoList />
        </>
    )
}

export default App
