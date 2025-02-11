import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../../Redux/slices/CourseListSlice";
import { useEffect } from "react";
import CourseCard from "../../UI/CourseCard";
import HomeLayout from '../../Layouts/HomeLayout'

function CourseList(){
    const dispatch = useDispatch();
    const {courseData} =  useSelector((state) => state.course)
    async function loadCourses(){
        await dispatch(getAllCourses())
    }

    useEffect(()=>{
        loadCourses()
    },[])

    return(
        <HomeLayout>
            <div className="min-h-[96vh] h-auto flex flex-wrap bg-slate-900 gap-14 text-white pl-20 pb-12 pt-20">
            {courseData?.map((element)=>{
                return <CourseCard key={element._id} data={element} />
            })}
        </div>
        </HomeLayout>
        
    )
}

export default CourseList