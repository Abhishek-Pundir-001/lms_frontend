import { useState } from "react"
import HomeLayout from "../Layouts/HomeLayout";
import axiosInstance from "../../Helpers/axiosinstance";
import toast from "react-hot-toast";
import { checkEmail } from "../../Helpers/validationCheck";

function ContactPage() {

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    })

    function handeleUserDetails(e) {
        const { name, value } = e.target;
        console.log(name, value)
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault()
        if (!userDetails.name || !userDetails.email || !userDetails.mobile || !userDetails.message) {
            toast.error("All fields are mandatory")
            return
        }

        if (!checkEmail(userDetails.email)) {
            toast.error('pelase enter a valid email')
            return
        }
        try{
            const res = axiosInstance.post('/misc/contact', userDetails)
            toast.promise(res, {
                loading: 'wait submitting your form',
                success: (data) => {
                   return data?.data?.message
                },
                error: 'fail to submit the form'
            })

            const contacResponse = await res
            if(contacResponse?.data){
                setUserDetails({
                    name: '',
                    email: '',
                    mobile: '',
                    message: ''
                })
            }
             
        }
        catch(e){
            toast.error('operation failed')
        }
       

    }

    return (
        <HomeLayout>
            <div className="h-[96vh] flex bg-slate-900 items-center justify-center">
                <form onSubmit={onFormSubmit} noValidate 
                className="flex flex-col p-4  gap-2  w-[22rem] shadow-[0_0_10px_blue] rounded-md text-white">
                    <h1 className="text-2xl text-center text-yellow-300 font-medium">Contact Form</h1>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="name" className="mb-2">Name:</label>
                        <input type="text"
                            id="name"
                            name="name"
                            className="bg-transparent px-2 py-1 rounded-md outline-none border-2"
                            value={userDetails.name}
                            onChange={handeleUserDetails}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="email" className="mb-2">email:</label>
                        <input type="email"
                            id="email"
                            name="email"
                            className="bg-transparent px-2 py-1 rounded-md outline-none border-2"
                            value={userDetails.email}
                            onChange={handeleUserDetails}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="number" className="mb-2">Mobile:</label>
                        <input type="number"
                            id="number"
                            name="mobile"
                            className="bg-transparent px-2 py-1 rounded-md outline-none border-2"
                            value={userDetails.mobile}
                            onChange={handeleUserDetails}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="message" className="mb-2">message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="bg-transparent px-2 py-1 rounded-md outline-none border-2 resize-none"
                            value={userDetails.message}
                            onChange={handeleUserDetails}
                        />
                    </div>
                    <button className="w-full bg-yellow-400 p-2 rounded-lg hover:bg-yellow-500 transition-all ease-in-out duration-300" type="submit">Submit</button>
                </form>
            </div>
        </HomeLayout>

    )
}

export default ContactPage