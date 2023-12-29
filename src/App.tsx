import "./App.css"
import Counter from "./state-management/counter/Counter"
import Shop from "./state-management/shop/Shop"
import BoundStore from "./state-management/slice-pattern/BoundStore"

function App() {
    return (
        <>
            <h1>React TypeScript</h1>
            <Counter />
            <Shop />
            <BoundStore />
        </>
    )
}

export default App
