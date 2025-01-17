import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loggedInUser } from "../../Redux/slices/AuthSlice";
import HomeLayout from "../Layouts/HomeLayout";

function LoginPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData, [name]: value
        })
        //   console.log(loginData)
    }

   async function login(e) {
        e.preventDefault();

        const response = await dispatch(loggedInUser(loginData));
        // console.log(response)
        if (response?.payload?.success) {
            navigate("/")
        }
        setLoginData({
            email: "",
            password: ""
        })

    }

    return (
        <HomeLayout>
            <div className="h-[100vh] flex flex-col justify-center items-center text-white bg-slate-900">
                <form className="flex flex-col gap-4 p-4 border-2 rounded-md">
                    <h2 className="text-center font-medium text-xl">Login Form</h2>
                    <div className="w-full">
                        <label htmlFor="email">Email</label>
                        <input onChange={handleUserInput} type="email" id="email" name="email" className="outline-none w-full mt-2 p-1 bg-transparent border-2 rounded-md" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password">Password</label>
                        <input onChange={handleUserInput} type="password" id="password" name="password" className="outline-none w-full mt-2 p-1 bg-transparent border-2 rounded-md" />
                    </div>
                    <button onClick={login} className="bg-yellow-400 p-2 rounded-md mt-2">Login</button>
                    <p className="text-center text-sm">Don't have an account?<Link to='/signup' className="text-lg text-green-600 ml-2">signup</Link></p>
                </form>
            </div>
        </HomeLayout>



    )
}

export default LoginPage