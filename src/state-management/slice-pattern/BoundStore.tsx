import useBoundStore from "./store"

export default function BoundStore() {
    const {bear, fish, eatFish, addBear, addFish} = useBoundStore()

    return (
        <div className=" my-10">
            <h1>BoundStore</h1>
            <h2>Bear: {bear}</h2>
            <h3>Fish: {fish}</h3>
            <button onClick={() => eatFish()}>Eat Fish</button>
            <button onClick={() => addBear(1)}>Add Bear</button>
            <button onClick={() => addFish(5)}>Add Fish</button>
        </div>
    )
}
