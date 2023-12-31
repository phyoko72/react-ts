import useTodos from "../hooks/useTodos"

export default function Paragraph() {
    const {data} = useTodos()
    console.log(data)
    return <div>Paragraph</div>
}
