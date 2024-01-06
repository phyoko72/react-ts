import {useForm, useFieldArray} from "react-hook-form"
import {DevTool} from "@hookform/devtools"
interface FormData {
    username: string
    email: string
    channel: string
    social: {
        twitter: string
        facebook: string
    }
    phone: [string, string]
    phList: {number: string}[]
}
const YoutubeForm = () => {
    const form = useForm<FormData>({
        defaultValues: async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            )
            const data: {id: number; name: string; email: string} =
                await res.json()
            return {
                username: data.name,
                email: data.email,
                channel: "",
                social: {twitter: "", facebook: ""},
                phone: ["", ""],
                phList: [{number: ""}],
            }
        },
    })

    const {register, control, handleSubmit, formState} = form
    const {errors} = formState
    console.count("Form Rendered")

    const {fields, append, remove} = useFieldArray({
        name: "phList",
        control,
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    // const {name,onChange,onBlur,ref} = register("username")

    return (
        <div className=" my-3">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" border border-white p-2 rounded w-[500px] *:w-full [&>input]:p-2 [&>input]:rounded [&>input]:mb-3"
                noValidate
            >
                <label htmlFor="username">Username</label>
                <br />
                <input
                    type="text"
                    {...register("username", {
                        required: {
                            value: true,
                            message: "Username is required",
                        },
                    })}
                    id="username"
                />
                {errors.username && (
                    <p className=" bg-red-700 rounded p-1 text-sm">
                        {errors.username.message}
                    </p>
                )}
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                            message: "Invalid email format",
                        },
                        validate: {
                            notAdmin: (value) => {
                                return (
                                    value !== "admin@example.com" ||
                                    "Enter a different email address"
                                )
                            },
                        },
                    })}
                    id="email"
                />
                {errors.email && (
                    <p className=" bg-red-700 rounded p-1 text-sm">
                        {errors.email.message}
                    </p>
                )}
                <br />
                <label htmlFor="channel">Channel</label>
                <br />
                <input
                    type="text"
                    {...register("channel", {
                        required: "Channel is required",
                    })}
                    id="channel"
                />
                <input
                    type="text"
                    {...register("social.twitter", {
                        required: "Twitter is required",
                    })}
                    id="twitter"
                    placeholder="Enter Twitter"
                />
                {errors.social?.twitter && (
                    <p className=" bg-red-700 rounded p-1 text-sm">
                        {errors.social.twitter.message}
                    </p>
                )}
                <br />
                <input
                    type="text"
                    {...register("social.facebook", {
                        required: "Facebook is required",
                    })}
                    id="facebook"
                    placeholder="Enter Facebook"
                />
                {errors.social?.facebook && (
                    <p className=" bg-red-700 rounded p-1 text-sm">
                        {errors.social.facebook.message}
                    </p>
                )}
                <br />
                <label htmlFor="primary phone">Primary Phone</label>
                <br />
                <input
                    type="text"
                    {...register("phone.0", {
                        required: {
                            value: true,
                            message: "Primary Phone is required",
                        },
                    })}
                    id="primary phone"
                />
                {errors.phone?.[0] && (
                    <p className=" bg-red-700 rounded p-1 text-sm">
                        {errors.phone[0].message}
                    </p>
                )}
                <br />
                <label htmlFor="secondary phone">Secondary Phone</label>
                <br />
                <input
                    type="text"
                    {...register("phone.1", {
                        required: {
                            value: true,
                            message: "Secondary Phone is required",
                        },
                    })}
                    id="username"
                />
                {errors.phone?.[1] && (
                    <p className=" bg-red-700 rounded p-1 text-sm">
                        {errors.phone[1].message}
                    </p>
                )}
                <br />
                <>
                    <label>List of Phone Numbers</label>
                    <br />
                    {fields.map((field, index) => {
                        return (
                            <div key={field.id} className=" mb-2">
                                <input
                                    type="text"
                                    {...register(`phList.${index}.number`)}
                                    id={`phList.${index}.number`}
                                    className=" w-full p-2 rounded mb-2"
                                />
                                {index > 0 && (
                                    <button
                                        className=" p-1 text-sm bg-red-600 rounded"
                                        onClick={() => remove(index)}
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        )
                    })}
                    <button type="button" onClick={() => append({number: ""})}>
                        Add More Phone
                    </button>
                </>
                <button className=" bg-blue-700 text-sm rounded-md p-1">
                    Submit
                </button>
            </form>
            <DevTool control={control} />
        </div>
    )
}
export default YoutubeForm
