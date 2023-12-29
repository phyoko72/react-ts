import {StateCreator} from "zustand"

export type FishSlice = {
    fish: number
    addFish: (qty: number) => void
}
// + type StateCreator
// +   < State
// +   , InMutators extends [StoreMutatorIdentifier, unknown][] = []
// +   , OutMutators extends [StoreMutatorIdentifier, unknown][] = []
// +   , Return = State
// +   > =
export const createFishSlice: StateCreator<FishSlice> = (set) => ({
    fish: 5,
    addFish: (qty: number) => set((store) => ({fish: store.fish + qty})),
})

export type BearSlice = {
    bear: number
    addBear: (qty: number) => void
    eatFish: () => void
}

export const createBearSlice: StateCreator<
    BearSlice & FishSlice,
    [],
    [],
    BearSlice
> = (set) => ({
    bear: 1,
    addBear: (qty: number) => set((store) => ({bear: store.bear + qty})),
    eatFish: () => set((store) => ({fish: store.fish - 1})),
})
