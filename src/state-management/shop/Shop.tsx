import useShopStore from "./store"

export default function Shop() {
    const {salmon, tuna, addSalmon, addTuna, reset} = useShopStore()
    return (
        <div className=" border my-10 [&>button]:text-sm [&>button]:mx-2">
            <h1>Zustand</h1>
            <h1>Salmon: {salmon}</h1>
            <h1>Tuna: {tuna}</h1>
            <button onClick={() => addSalmon(2)}>Add Salmon</button>

            <button onClick={() => addTuna()}>Add Tuna</button>

            <button onClick={() => reset()}>Reset</button>
        </div>
    )
}
