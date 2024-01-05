import {useForm} from "react-hook-form"
import {DevTool} from "@hookform/devtools"
const YoutubeForm = () => {
    const form = useForm()

    const {register, control} = form

    // const {name,onChange,onBlur,ref} = register("username")

    return (
        <div className=" my-3">
            <form className=" border border-white p-2 rounded w-[500px] *:w-full [&>input]:p-2 [&>input]:rounded [&>input]:mb-3">
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" {...register("username")} id="username" />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" {...register("email")} id="email" />
                <br />
                <label htmlFor="channel">Channel</label>
                <br />
                <input type="text" {...register("channel")} id="channel" />
                <br />
                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}
export default YoutubeForm
