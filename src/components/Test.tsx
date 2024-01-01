import {useQuery} from "@tanstack/react-query"
import useTodos, {Todo} from "../hooks/useTodos"
import axios from "axios"

export default function Test() {
    // const {data: todos} = useQuery<Todo[], Error>({
    //     queryKey: ["todos"],
    //     queryFn: () => {
    //         return axios
    //             .get("https://jsonplaceholder.typicode.com/todos")
    //             .then((res) => res.data)
    //     },
    // })
    // console.log("todos@Test: ", todos)
    const {data: albums} = useQuery<Todo[], Error>({
        queryKey: ["albums"],
        queryFn: async () => {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/albums"
            )
            return res.data
        },
    })
    console.log("\nAlbums@Test: ", albums)

    return (
        <>
            <h2>Test</h2>
            {/* <ul>
                {todos?.map((todo) => (
                    <li key={todo.id}>
                        {todo.id} / {todo.title}
                    </li>
                ))}
            </ul> */}
            <ul>
                {albums?.map((album) => (
                    <li key={album.title}>
                        {album.id} / {album.title}
                    </li>
                ))}
            </ul>
        </>
    )
}
