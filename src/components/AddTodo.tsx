import {useMutation, useQueryClient} from "@tanstack/react-query"
import {FormEvent, useRef} from "react"
import {Todo} from "../hooks/useTodos"
import axios from "axios"

export default function AddTodo() {
    const queryClient = useQueryClient()
    const addTodo = useMutation({
        mutationFn: (todo: Todo) => {
            return axios
                .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
                .then((res) => res.data)
        },
        onSuccess: (savedData, newData) => {
            console.log({savedData, newData})
            // queryClient.invalidateQueries({
            //     queryKey: ["todos"],
            // })

            queryClient.setQueryData<Todo[]>(["todos"], (todos) => {
                console.log("setQueryData: ", todos)
                // update data immutable way
                return [savedData, ...(todos || [])]
            })
        },
    })
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(inputRef.current?.value)

        if (inputRef.current && inputRef.current.value)
            addTodo.mutate({
                userId: 1,
                id: 0,
                title: inputRef.current.value,
                completed: true,
            })
    }
    return (
        <>
            {addTodo.error && <h1>{addTodo.error.message}</h1>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Add Todo</label>
                <br />
                <input type="text" name="todo" id="todo" ref={inputRef} />
                <br />
                <button>{addTodo.isPending ? "Adding" : "Add"}</button>
            </form>
        </>
    )
}
