import { useNavigate } from "react-router-dom";

function DeniedPage(){
    const navigate = useNavigate()
    return(
        <div className="h-screen w-full bg-[#1A2238] flex flex-col justify-center items-center">
            <h1 className="text-8xl text-white tracking-widest">4O4</h1>
            <p className="text-yellow-400 text-xl absolute rotate-12">Access Denied</p>
            <button onClick={()=> navigate(-1)} className="mt-8 border-2 border-green-400 hover:bg-slate-600 transition-all ease-in-out duration-300 px-6 py-2 rounded-md text-white">Go back</button>
        </div>
    )
}

export default DeniedPage;