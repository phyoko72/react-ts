import useCounterStore from "./store"

export default function Counter() {
    const {count, increment, decrement, reset} = useCounterStore()
    return (
        <>
            <button
                className=" bg-blue-700 text-sm"
                onClick={() => decrement()}
            >
                -
            </button>
            <h1 className=" inline-block">Count:{count}</h1>
            <button
                className=" bg-blue-700 text-sm"
                onClick={() => increment()}
            >
                +
            </button>
            <button className=" bg-blue-700 text-sm" onClick={() => reset()}>
                reset
            </button>
        </>
    )
}
