import {useMutation, useQueryClient} from "@tanstack/react-query"
import {Album} from "./useAlbums"
import axios from "axios"
import {CACHE_KEY_ALBUM} from "../lib/constants"

export default function useAddAlbum(onAdd: () => void) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (newAlbum: Album) => {
            const res = await axios.post<Album>(
                "https://jsonplaceholder.typicode.com/albums",
                newAlbum
            )
            return res.data
        },
        onMutate: (newAlbum) => {
            const previousAlbums =
                queryClient.getQueryData<Album[]>(CACHE_KEY_ALBUM)
            queryClient.setQueryData<Album[]>(CACHE_KEY_ALBUM, (albums) => {
                return [newAlbum, ...(albums || [])]
            })
            onAdd()
            return {previousAlbums}
        },
        onSuccess: (fromServer, fromClient) => {
            console.log({fromServer, fromClient})
            // queryClient.setQueryData<Album[]>(CACHE_KEY_ALBUM, (albums) => {
            //     return [fromServer, ...(albums || [])]
            // })
            queryClient.setQueryData<Album[]>(CACHE_KEY_ALBUM, (albums) => {
                return albums?.map((album) =>
                    album === fromClient ? fromServer : album
                )
            })
        },
        onError: (error, newAlbum, context) => {
            if (!context) return
            queryClient.setQueryData<Album[]>(
                CACHE_KEY_ALBUM,
                context.previousAlbums
            )
        },
    })
}
