import {useAppDispatch, useAppSelector} from "../../store"
import {cakeActions} from "./cakeSlice"

export default function CakeView() {
    const cake = useAppSelector((state) => state.cakeReducer.cake)
    const dispatch = useAppDispatch()

    return (
        <div>
            <h1>Cake View</h1>
            <h1>{cake}</h1>
            <button onClick={() => dispatch(cakeActions.ordered())}>
                Order
            </button>

            <button onClick={() => dispatch(cakeActions.restock(5))}>
                Restock
            </button>
        </div>
    )
}
