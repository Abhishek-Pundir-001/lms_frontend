import { Link } from "react-router-dom"
import HomePageMainimage from '../../assets/study.jpg'
function Homepage() {
    return (
        <div className="flex items-center w-full justify-evenly h-[92vh] bg-gradient-to-r from-indigo-500 ...">
            <div>
                <h1 className="text-white text-2xl  font-bold mb-3">Find Out Best <span className="text-yellow-300">online Courses</span></h1>
                <p className="text-lg text-emerald-50 w-1/2">we have a large libraray of courses taught by the highly qualified and experienced teachers</p>
                <div className="space-x-6 mt-4">
                    <Link to="/courses"><button className="text-white px-5 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 transition-all ease-in-out duration-300">Explore courses</button></Link>
                    <Link to='/contact'>
                        <button className="text-white px-5 py-2 rounded-md bg-transparent border-white border-2 hover:bg-green-600  transition-all ease-in-out duration-300">Contact us</button></Link>
                </div>
            </div>
            <div>
                <img src={HomePageMainimage} className='rounded-md' />
            </div>
        </div>
    )
}
export default Homepage