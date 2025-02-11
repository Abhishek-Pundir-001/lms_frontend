import { use } from "react";
import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { createNewCourse } from "../../../Redux/slices/CourseListSlice";
import HomeLayout from "../../Layouts/HomeLayout";


function CreateCourse() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [lectureThumbnail, setLectureThumbnail] = useState('')
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        category: '',
        createdBy: '',
        thumbnail: ''
    })

    function handleCourseData(e) {
        const { name, value } = e.target
        console.log(name, value)
        setCourseData({
            ...courseData,
            [name]: value
        })
    }
    function getThumbnail(event) {
        event.preventDefault();

        const uploadedImage = event.target.files[0]

        // console.log('uploads',uploadedImage)

        if (uploadedImage) {
            setCourseData({
                ...courseData,
                thumbnail: uploadedImage
            })
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load", function () {
            // console.log(this.result)
            setLectureThumbnail(this.result)
        })
    }

    async function createCourse(e) {
        e.preventDefault()
        if (!courseData.title || !courseData.description || !courseData.category || !courseData.createdBy || !courseData.thumbnail) {
            toast.error('Please fill all the details')
            return
        }
        const formData = new FormData();
        formData.append('title', courseData.title)
        formData.append('description', courseData.description)
        formData.append('createdBy', courseData.createdBy)
        formData.append('category', courseData.category)
        formData.append('thumbnail', courseData.thumbnail)

        const response = await dispatch(createNewCourse(formData));
        console.log(response)
        if (response?.payload?.success) {
            setCourseData({
                title: '',
                description: '',
                category: '',
                createdBy: '',
                thumbnail: ''
            })
            setLectureThumbnail('')
            navigate('/courses')
        }



    }






    return (
        <HomeLayout>
             <div className="bg-slate-900 flex items-center justify-center h-[92vh]">
            <form onSubmit={createCourse} encType="multipart/form-data" noValidate className="flex gap-4 w-[50rem] shadow-[0_0_10px_white] rounded-lg">
                <div className="w-1/2">
                    <label htmlFor="lecturethumbnail">
                        <div className="h-[77%] w-full rounded-t-md bg-white text-black text-xl font-bold flex items-center justify-center">
                            {lectureThumbnail ? <img src={lectureThumbnail} alt="" className="h-full" /> :
                                <h1 className="text-center my-auto">Click to upload course thumbnail</h1>}

                        </div>
                    </label>
                    <input
                        type="file"
                        id="lecturethumbnail"
                        className="invisible"
                        accept=".jpg, .jpeg, .svg, .png"
                        onChange={getThumbnail}
                    />

                    <button className="w-[98%] border-none bg-yellow-500 rounded-md  text-white py-2 mt-4 ml-1" type="submit">Create Course</button>


                </div>
                <div className="flex flex-col gap-2 w-1/2 p-4">
                    <label htmlFor="title" className="text-white text-xl font-medium">Title:</label>
                    <input type="text"
                        name="title"
                        id="title"
                        onChange={handleCourseData}
                        value={courseData.title}
                        className="bg-transparent rounded-md outline-none p-1 border-2 mt-2 w-[95%] text-white"
                    />
                    <label htmlFor="description" className="text-white text-xl font-medium">Description:</label>
                    <textarea rows={4}
                        name="description"
                        id="description"
                        onChange={handleCourseData}
                        value={courseData.description}
                        className="bg-transparent rounded-md outline-none p-1 border-2 mt-2 w-[95%] text-white
                        resize-none"
                    />
                    <label htmlFor="category" className="text-white text-xl font-medium">Category:</label>
                    <input type="text"
                        name="category"
                        id="category"
                        value={courseData.category}
                        onChange={handleCourseData}
                        className="bg-transparent rounded-md outline-none p-1 border-2 mt-2 w-[95%] text-white"
                    />
                    <label htmlFor="createdBy" className="text-white text-xl font-medium">Instructor:</label>
                    <input type="text"
                        name="createdBy"
                        id="createdBy"
                        value={courseData.createdBy}
                        onChange={handleCourseData}
                        className="bg-transparent rounded-md outline-none p-1 border-2 mt-2 w-[95%] text-white"
                    />

                </div>
            </form>
        </div>
        </HomeLayout>
       
    )
}

export default CreateCourse