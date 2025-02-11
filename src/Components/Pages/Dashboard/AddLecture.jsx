import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addLectures } from "../../../Redux/slices/LectureSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";


function AddLecture() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { state } = useLocation()

    useEffect(() => {
        // console.log(lectureData)
        if (!state) navigate("/courses")
    }, [])

    const [lectureData, setLectureDate] = useState({
        id: state._id,
        title: '',
        description: '',
        lecture: undefined,
        videoSrc: ''
    })

    function handleUserInput(e) {
        e.preventDefault();
        const {name, value} = e.target
        console.log(name,value)
        setLectureDate({
            ...lectureData,
            [name]: value
        })
    }

    function handleVideoUpload(e) {
        const video = e.target.files[0];
        const videourl = window.URL.createObjectURL(video);
        // console.log(videourl)

        setLectureDate({
            ...lectureData, lecture: video, videoSrc: videourl
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault()
        if (!lectureData.title || !lectureData.lecture || !lectureData.description) {
            toast.error('All fields are mandatory')
            return
        }
        const response = await dispatch(addLectures(lectureData));
        if (response?.payload?.success) {
            setLectureDate({
                id: state._id,
                title: '',
                description: '',
                lecture: undefined,
                videoSrc: ''
            })

        }
    }

    return (
        <HomeLayout>
            <div className="h-[100vh] bg-slate-900 flex justify-center items-center">
                <div className="w-96 p-4 rounded-md shadow-[0_0_10px_black]">
                    <header className="relative">
                        <h1 className="text-yellow-500 font-medium text-center text-xl font-sans">Add new Lecture</h1>
                        <button onClick={() => navigate(-1)} className="text-2xl font-medium text-accent absolute left-2 top-2"><AiOutlineArrowLeft /></button>
                    </header>

                    <form onSubmit={onFormSubmit} className="flex flex-col gap-2  px-2 mt-4" encType="multipart/form-data" noValidate>
                        <label htmlFor="title" className="text-white mb-1 text-base font-medium">Title:</label>
                        <input type="text"
                            onChange={handleUserInput}
                            value={lectureData.title}
                            name="title"
                            id="title"
                            className="bg-transparent p-1 border-2 rounded-md outline-none text-white"
                        />
                        <label htmlFor="description" className="text-white mb-1 text-base font-medium">Description:</label>
                        <textarea
                            onChange={handleUserInput}
                            value={lectureData.description}
                            rows='4'
                            name="description"
                            id="description"
                            className="bg-transparent p-1 border-2 rounded-md outline-none text-white resize-none"
                        />
                        {lectureData?.videoSrc ?
                            (
                                <video src={lectureData.videoSrc}
                                    className="object-fill rounded-t-sm mt-3"
                                    controls
                                    controlsList="nodownload"
                                    disablePictureInPicture
                                    muted
                                />
                            ) :

                            (
                                <div className="flex flex-col justify-center items-center h-32 border-2 mt-3 rounded-md">
                                    <label htmlFor="video-uploads" className="text-white text-lg font-medium">click upload lecture video</label>
                                    <input type="file"
                                        id="video-uploads"
                                        className="hidden"
                                        onChange={handleVideoUpload}
                                    />
                                </div>
                            )
                        }
                        <button type="submit" className="btn btn-primary p-2 w-full mt-1 text-lg">Add Lecture</button>
                    </form>
                </div>
            </div>
        </HomeLayout>

    )

}

export default AddLecture;