import { useNavigate } from "react-router-dom"

function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center bg-slate-900">
            <div className="relative">
                <h1 className="text-6xl text-blue-400 tracking-widest font-bold">404</h1>
                <div className="absolute rotate-12 text-red-400 top-3 w-52 z-50 text-xl">
                    Bad request Not found
                </div>
            </div>
            <button onClick={() => navigate(-1)} className="px-4 py-2 text-green-400 border-green-500 border-2 my-4 rounded-md">Go back</button>
        </div>
    )
}
export default NotFoundPage