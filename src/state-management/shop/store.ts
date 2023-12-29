import {StateCreator, create} from "zustand"

type State = {
    salmon: number
    tuna: number
}

type Actions = {
    addSalmon: (qty: number) => void
    addTuna: (qty?: number) => void
    reset: () => void
}

const createShopSlice: StateCreator<State & Actions> = (set) => ({
    ...initialState,
    addSalmon: (qty: number) => set((store) => ({salmon: store.salmon + qty})),
    addTuna: (qty?: number) =>
        set((store) => ({tuna: store.tuna + (qty ? qty : 1)})),
    reset: () => set(() => initialState),
})

const initialState: State = {salmon: 10, tuna: 12}

const useShopStore = create(createShopSlice)

export default useShopStore
