import {useQuery} from "@tanstack/react-query"
import useTodos, {Todo} from "../hooks/useTodos"
import axios from "axios"

export default function Test() {
    const {data: todos} = useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: () => {
            return axios
                .get("https://jsonplaceholder.typicode.com/todos")
                .then((res) => res.data)
        },
    })
    console.log("todos@Test: ", todos)
    return (
        <>
            <h2>Test</h2>
            <ul>
                {todos?.splice(0, 5).map((todo) => (
                    <li key={todo.id}>
                        {todo.id} / {todo.title}
                    </li>
                ))}
            </ul>
        </>
    )
}
