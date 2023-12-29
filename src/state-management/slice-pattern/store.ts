import {create} from "zustand"
import {BearSlice, FishSlice, createBearSlice, createFishSlice} from "./slices"

const useBoundStore = create<BearSlice & FishSlice>((...a) => ({
    ...createBearSlice(...a),
    ...createFishSlice(...a),
}))

export default useBoundStore
