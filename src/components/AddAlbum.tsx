import {FormEvent, useRef} from "react"
import useAddAlbum from "../hooks/useAddAlbum"

export default function AddAlbum() {
    const inputRef = useRef<HTMLInputElement>(null)
    // const queryClient = useQueryClient()

    // const addAlbum = useMutation({
    //     mutationFn: async (newAlbum: Album) => {
    //         const res = await axios.post<Album>(
    //             "https://jsonplaceholder.typicode.com/albums",
    //             newAlbum
    //         )
    //         return res.data
    //     },
    //     onMutate: (newAlbum) => {
    //         const previousAlbums = queryClient.getQueryData<Album[]>(["albums"])
    //         queryClient.setQueryData<Album[]>(["albums"], (albums) => {
    //             return [newAlbum, ...(albums || [])]
    //         })
    //         return {previousAlbums}
    //     },
    //     onSuccess: (fromServer, fromClient) => {
    //         console.log({fromServer, fromClient})
    //         // queryClient.setQueryData<Album[]>(["albums"], (albums) => {
    //         //     return [fromServer, ...(albums || [])]
    //         // })
    //         queryClient.setQueryData<Album[]>(["albums"], (albums) => {
    //             return albums?.map((album) =>
    //                 album === fromClient ? fromServer : album
    //             )
    //         })
    //     },
    //     onError: (error, newAlbum, context) => {
    //         if (!context) return
    //         queryClient.setQueryData<Album[]>(
    //             ["albums"],
    //             context.previousAlbums
    //         )
    //     },
    // })

    const addAlbum = useAddAlbum(() => {
        if (inputRef.current) {
            inputRef.current.value = ""
        }
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputRef.current && inputRef.current.value) {
            addAlbum.mutate({id: 0, title: inputRef.current?.value, userId: 1})
        }
    }
    return (
        <>
            <h2>Add New Album</h2>
            {addAlbum.error && (
                <div className=" text-red-700 font-semibold">
                    {addAlbum.error.message}
                </div>
            )}
            {addAlbum.isPending && (
                <div className=" bg-white/80 text-black/80 font-semibold rounded-md">
                    Adding Album
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="album"
                    id="album"
                    ref={inputRef}
                    placeholder="Add Album"
                    className=" p-1 rounded"
                />
                <br />

                <button
                    disabled={addAlbum.isPending}
                    className=" bg-blue-600 text-sm my-2 disabled:bg-yellow-500 px-2 py-1"
                >
                    Add
                </button>
            </form>
        </>
    )
}
