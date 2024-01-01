import "./App.css"
import AddTodo from "./components/AddTodo"
import Test from "./components/Test"

import TodoList from "./components/TodoList"
import UserList from "./components/UserList"

function App() {
    return (
        <>
            <h1>React TypeScript</h1>
            <AddTodo />
            <Test />
            <TodoList />
        </>
    )
}

export default App
