import useForm from "./useForm";

export default function ContactForm() {
    const { values, errors, handleChange, handleSubmit } = useForm(
        { name: "", email: "", message: "" },
        validate,
        (vals) => {
            console.log("Submitted:", vals);
        }
    );

    function validate(values: Record<string, string>) {
        const errors: Record<string, string> = {};

        if (!values.name) {
            errors.name = "Name is required";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.message) {
            errors.message = "Message is required";
        }

        return errors;
    }





    return (

        <div className="py-32">

            <form
                onSubmit={handleSubmit}
                className="space-y-10 lg:max-w-xl md:max-w-2xl max-w-3xl mx-auto p-10 md:rounded-xl rounded-2xl shadow
      bg-white dark:bg-[#9ba2ae] text-black dark:text-white" noValidate
            >
                <h2 className="text-4xl font-bold">Contact Me</h2>

                <div className="space-y-10 lg:text-xl text-3xl">

                    <div className="relative">
                        {errors.name && <p className="text-red-500 absolute right-4 -top-8 font-bold text-[1rem] tracking-tight">{errors.name}</p>}
                        <input
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full md:p-5 p-6 rounded bg-gray-100 dark:bg-gray-500"
                        />

                    </div>
                    <div className="relative">
                        {errors.email && <p className="text-red-500 absolute right-4 -top-8 font-bold text-[1rem] tracking-tight">{errors.email}</p>}

                        <input
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full md:p-5 p-6 rounded bg-gray-100 dark:bg-gray-500"
                        />

                    </div>

                    <div className="relative">
                        {errors.message && <p className="text-red-500 absolute right-4 -top-8 font-bold text-[1rem] tracking-tight ">{errors.message}</p>}
                        <textarea
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full md:p-5 p-6 rounded bg-gray-100 dark:bg-gray-500"
                        />

                    </div>
                </div>

                <button
                    type="submit"
                    className="md:px-4 md:py-2 px-6 py-4 lg:rounded-lg md:rounded-xl rounded-2xl bg-blue-500 text-white lg:text-xl md:text-2xl text-3xl
        hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}