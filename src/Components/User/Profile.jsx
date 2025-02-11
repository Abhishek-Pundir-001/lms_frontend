import { useSelector } from "react-redux"
import HomeLayout from "../Layouts/HomeLayout"
import { Link, useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";


function Profile() {
    const userData = useSelector((state) => state.auth?.data)
    const navigate = useNavigate()
    return (
        <HomeLayout>
            <div className="min-h-[96vh] bg-slate-900 flex  items-center justify-center">
                <div className="w-96 shadow-[0_0_10px_black] p-4 relative">
                    <button onClick={()=>navigate(-1)} className="absolute lett-0"><FaArrowLeft className="text-cyan-500" size={20} /></button>
                    <div className="flex justify-center">
                       {userData.avatar?.secure_url ? <img src={userData.avatar?.secure_url} alt="" className="rounded-full h-28" />:<BsPersonCircle className="w-24 h-24 m-auto text-white" />} 
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 text-white font-medium text-sm text-center mt-2">
                        <h1 className="text-lg">Name</h1>
                        <h1 className="text-lg text-yellow-400">{userData.name}</h1>
                        <h1>email</h1>
                        <h1>{userData.email}</h1>
                        <h1>Role</h1>
                        <h1>{userData.role}</h1>
                        <h1>subscription</h1>
                        <h1>{userData.subscription ? userData.subscription : 'INACTIVE'}</h1>
                        <button className="bg-yellow-500 text-white font-medium py-2 mt-2 mx-2 rounded-md hover:bg-yellow-400 transition-all ease-in-out duration-300">Change Password</button>
                        <Link to='/edit/profile' className="bg-yellow-500 text-white font-medium py-2 mt-2 rounded-md hover:bg-yellow-400 transition-all ease-in-out duration-300">
                            <button >Edit Profile</button>
                        </Link>

                    </div>
                    {
                        userData.subscription == 'ACTIVE' ? (
                            <div className="mt-4 text-center">
                                <button className="w-full border-none font-medium text-white bg-red-500 py-2 rounded-md">Cancel subscription</button>
                            </div>
                        ) : ''
                    }
                </div>
            </div>
        </HomeLayout>
    )
}

export default Profile