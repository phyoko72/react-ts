import {Fragment} from "react"
import useAlbums from "../hooks/useAlbums"

export default function AlbumList() {
    const pageSize = 5
    const {
        data: albums,
        error,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
    } = useAlbums({pageSize})
    console.log("albums@AlbumList: ", albums)

    if (isLoading) return <h1>Album Loading...</h1>
    if (error) return <h1>Album {error.message}</h1>

    return (
        <>
            <h1 className=" underline underline-offset-4">Albums</h1>
            <ul>
                {albums?.pages.map((page, index) => (
                    <Fragment key={index}>
                        {page.map((album) => (
                            <li
                                key={album.id}
                                className=" border rounded p-2 my-2 hover:bg-white/25"
                            >
                                {album.title}
                            </li>
                        ))}
                    </Fragment>
                ))}
            </ul>
            <button
                disabled={isFetchingNextPage}
                className=" bg-blue-600 text-sm disabled:bg-yellow-500"
                onClick={() => fetchNextPage()}
            >
                {isFetchingNextPage ? "Loading..." : "Load Albumns"}
            </button>
        </>
    )
}
