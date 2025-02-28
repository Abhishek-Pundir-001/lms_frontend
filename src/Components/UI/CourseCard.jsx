import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import developer from '../../assets/developer.jpg'

function CourseCard({ data }) {
    const navigate = useNavigate()
    useEffect(()=>{
        // console.log(data)
    })
    return (
        <div onClick={()=>navigate('/course/desc',{state:{data}})} className="flex flex-col h-[370px] w-full md:w-1/3 lg:w-[25vw]  gap-3 shadow-[0_0_10px_black] rounded-xl">
            <img src={data?.thumbnail?.secure_url} alt="" className='h-28 w-full rounded-t-lg group-hover:scale-[1,2] transition-all duration-300 ease-in-out' />
            <div className='pl-4 pr-2 flex flex-col gap-3'>
                <h2 className='text-yellow-400 font-sans font-bold text-xl'>{data.title}</h2>
                <p className='font-medium text-lime-300'>{data.description}</p>
                <p className='font-medium'>Category: {data.category}</p>
                <p className='font-mono'>Total Lectures: {data.lectures.length || 0}</p>
                <p className='text-yellow-400 font-medium'>{data.createdBy}</p>
            </div>
        </div>


    )
}

export default CourseCard