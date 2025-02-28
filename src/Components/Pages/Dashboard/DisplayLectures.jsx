import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import HomeLayout from "../../Layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { deleteLecture, getCourseLectures } from "../../../Redux/slices/LectureSlice";



function DisplayLectures() {
    const { role } = useSelector((state) => state?.auth)
    const { state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [cuurentvideo, setCurrentVideo] = useState(0)
    const { lectures } = useSelector((state) => state.lecture)
    // console.log(lectures)
    useEffect(() => {
        if (!state) {
            navigate('/courses')
        }
        dispatch(getCourseLectures(state._id))
    }, [])

    function deleteLecturebyId(lectureId) {
        dispatch(deleteLecture({ courseId: state._id, lectureId: lectureId }))
        dispatch(getCourseLectures(state._id))
    }


    return (
        <HomeLayout>
            <div className="min-h-[96vh] bg-slate-900 flex items-center justify-center p-4">
                <div className="min-h-[25rem] mt-20 flex flex-col md:flex-row gap-8 w-[30rem] md:w-[45rem] p-4 shadow-[0_0_10px_white] rounded-md">
                    {/* left-section */}
                    {lectures[cuurentvideo]?.lecture ? (<div className="flex shadow-[0_0_10px_black] flex-col rounded-md  md:w-96">
                        <video src={lectures[cuurentvideo]?.lecture?.secure_url}
                            className="object-fill rounded-md" controls disablePictureInPicture controlsList="nodownload"
                        ></video>
                        <div className="flex flex-col gap-4 pl-4">
                            <p className="text-yellow-400 font-medium"><span className="text-white font-medium">
                                Lecture :  </span>{lectures[cuurentvideo]?.title}</p>
                            <p className="text-yellow-400 font-medium"><span className="text-white font-medium" >Description :  </span>{lectures[cuurentvideo]?.description}</p>
                        </div>

                    </div>) : (<div className="w-96 shadow-[0_0_10px_black] text-white h-auto flex items-center justify-center"><h1 className="text-xl font-bold">No lecture yet</h1></div>)
                    }
                    {/* Right-section */}
                    <ul className="space-y-4 mb-5  h-[25rem] w-[22rem] rounded-sm p-4 shadow-[0_0_10px_white] overflow-scroll bg-white">
                        <div className="flex justify-between items-center">
                            <li className="text-yellow-400 text-xl font-medium">Lectures</li>
                            <li>
                                {role == 'ADMIN' && <button onClick={() => navigate('/add/lecture', { state: { ...state } })} className="btn-primary bg-yellow-500 text-white border-none px-4 py-2 rounded-md">Add Lecture</button>}
                            </li>
                        </div>
                        {lectures.map((lecture, idx) => {
                            return (
                                <li key={lecture._id}>
                                    <p onClick={() => setCurrentVideo(idx)} className="w-full text-black text-lg font-serif font-light cursor-pointer py-1">
                                        Lecture:{idx + 1}
                                        {"  " + lecture?.title}
                                    </p>
                                    {role == 'ADMIN' &&
                                        <button onClick={() => deleteLecturebyId(lecture._id)} className="bg-red-600 px-4 py-2 text-white text-lg  outline-none rounded-lg">Delete</button>
                                    }
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </HomeLayout>

    )
}

export default DisplayLectures