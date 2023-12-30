import "./App.css"
import CakeView from "./store/features/cake/CakeView"
import UserView from "./store/features/users/UserView"

function App() {
    return (
        <>
            <h1>React TypeScript</h1>
            <CakeView />
            <UserView />
        </>
    )
}

export default App
