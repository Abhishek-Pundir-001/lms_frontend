import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import HomeLayout from "../Layouts/HomeLayout";
import toast from "react-hot-toast";
import { createAccount } from "../../Redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkEmail, checkPassword } from "../../Helpers/validationCheck";

// const navigate = useNavigate()

function SignUpPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [previewImage, setPreviewImage] = useState('')

    const [signupData, setSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: ""
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignupData({
            ...signupData, [name]: value
        })
        // console.log(signupData)
    }

    function getImage(event) {
        event.preventDefault();

        const uploadedImage = event.target.files[0]

        // console.log('uploads',uploadedImage)

        if (uploadedImage) {
            setSignupData({
                ...signupData,
                avatar: uploadedImage
            })
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load", function () {
            // console.log(this.result)
            setPreviewImage(this.result)
        })
    }

    async function createNewAccount(e) {
        e.preventDefault();
        if (!signupData.fullName || !signupData.email || !signupData.password) {
            // console.log(signupData.fullName, signupData.email, signupData.password)
            toast.error('name,email,password are required fields')
            return
        }

        if (signupData.fullName.length < 5) {
            toast.error("Name must contain at leat 5 character")
            return
        }

        if (!checkEmail(signupData.email)) {
            toast.error('please enter a valid email')
            return
        }


        if (!checkPassword(signupData.password)) {
            toast.error('password must contain at least 6 char and minimum one number and one letter')
            return
        }

        const formData = new FormData();
        formData.append("name", signupData.fullName);
        formData.append("email", signupData.email)
        formData.append("password", signupData.password);
        formData.append("avatar", signupData.avatar)

        // dispatch create account action

        const response = await dispatch(createAccount(formData));
        // console.log(response)
        if (response?.payload?.success) {
            navigate("/")
        }

        setSignupData({
            fullName: "",
            email: "",
            password: "",
            avatar: ""
        })

        setPreviewImage("")

    }

    return (
        <HomeLayout>
            <div className="flex flex-col h-[92vh]  bg-slate-900  justify-center items-center">
                <form encType="multipart/form-data"
                    className="flex flex-col items-center justify-center p-4 gap-2 rounded-md text-white shadow-[0_0_10px_black]">
                    {/* <h2>Registration Form</h2> */}
                    <label htmlFor="image-uploads">
                        {
                            previewImage ? <img src={previewImage} alt=""
                                className="w-24 h-24 m-auto rounded-full" name="avatar" /> : <BsPersonCircle className="w-24 h-24 m-auto" />
                        }
                    </label>
                    <input
                        type="file"
                        id="image-uploads"
                        className="invisible"
                        accept=".jpg, .jpeg, .png, .svg"
                        onChange={getImage}


                    />
                    <div className="w-full">
                        <label htmlFor="fullName">Name</label>
                        <input
                            type="text"
                            name="fullName"
                            // value={signupData.fullName}
                            id="fullName"
                            className="py-2 px-1 w-full mt-2 rounded-md bg-transparent border-2 outline-none"
                            placeholder="enter your full Name"
                            onChange={handleUserInput} />
                    </div>

                    <div className="w-full">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="py-2 px-1 w-full mt-2 rounded-md bg-transparent border-2 outline-none"
                            placeholder="enter your email"
                            // value={signupData.email}
                            onChange={handleUserInput} />
                    </div>

                    <div className="w-full">
                        <label htmlFor="password">Pasword</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="py-2 px-1 w-full mt-2 rounded-md bg-transparent border-2 outline-none"
                            placeholder="enter your password"
                            // value={signupData.password}
                            onChange={handleUserInput} />
                    </div>

                    <button type="submit" className="bg-yellow-400 text-white border-none rounded-md w-full p-2 mt-2" onClick={createNewAccount}>Create account</button>

                    <p className="text-center text-sm">Already have an account?<Link className="text-blue-500 ml-1 text-sm" to='/login'>Login</Link></p>
                </form>

            </div>
        </HomeLayout>

    )
}

export default SignUpPage;