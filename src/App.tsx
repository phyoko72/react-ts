import "./App.css"
import AddAlbum from "./components/AddAlbum"
import AddTodo from "./components/AddTodo"
import AddUser from "./components/AddUser"
import AlbumList from "./components/AlbumList"
import Test from "./components/Test"

import TodoList from "./components/TodoList"
import UserList from "./components/UserList"

function App() {
    return (
        <>
            <h1>React TypeScript</h1>
            <AddUser />
            <UserList />
            <AddAlbum />
            <Test />
            <AlbumList />
            <AddTodo />
            <TodoList />
        </>
    )
}

export default App
