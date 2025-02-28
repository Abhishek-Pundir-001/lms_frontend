import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import { useSelector } from "react-redux";

function CourseDesc() {
    const navigate = useNavigate()
    const locator = useLocation();
    const { data } = locator.state

    const {role} = useSelector((state)=> state?.auth)
    // console.log(role)
    // console.log(data)

    return (
        <HomeLayout>
            <div className="h-[92vh] bg-slate-600 flex items-center justify-center">
                <div className="flex  shadow-[0_0_10px_black] w-[22rem] md:w-[30rem] rounded-md">
                    <div className="w-1/2 flex flex-col">
                        <img src={data?.thumbnail?.secure_url} alt="thumbnail" className="h-28 w-full rounded-sm" />
                        <div className="pl-4 pb-4 mt-2">
                            <p className="font-medium text-white">Total lectures : <span
                                className="text-yellow-500 text-lg">{data.lectures.length || 0} </span>
                            </p>
                            <p className="font-medium text-white">Category : <span
                                className="text-yellow-500 text-lg">{data.category} </span>
                            </p>
                            <p className="font-medium text-white">Instructor : <span
                                className="text-yellow-500 text-lg">{data.createdBy} </span>
                            </p>


                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2 p-3">
                        <p className="text-yellow-500 text-2xl font-bold">{data.title}</p>
                        <p className="text-white text-lg">{data.description}</p>
                       {role == 'ADMIN' ?(<button onClick={(()=> navigate('/course/lectures',{state:{...data}}))} className="w-full mt-4 font-bold hover:bg-yellow-400 transition-all ease-in-out duration-300 bg-yellow-500 text-white py-2 rounded-md">Watch lectures</button>):(<button className="w-full mt-4 font-bold hover:bg-yellow-400 transition-all ease-in-out duration-300 bg-yellow-500 text-white py-2 rounded-md">Subscribe</button>)} 
                    </div>

                </div>
            </div>
        </HomeLayout>

    )
}

export default CourseDesc;