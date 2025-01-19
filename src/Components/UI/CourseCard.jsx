import { useNavigate } from 'react-router-dom'
import developer from '../../assets/developer.jpg'

function CourseCard({ data }) {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate('/course/desc',{state:{data}})} className="flex flex-col h-[370px] w-[25vw]  gap-3 border-2 rounded-md">
            <img src={developer} alt="" className='h-28 w-full rounded-t-sm group-hover:scale-[1,2] transition-all duration-300 ease-in-out' />
            <div className='pl-4 pr-2 flex flex-col gap-3'>
                <h2 className='text-yellow-400 font-serif font-bold text-xl'>{data.title}</h2>
                <p>{data.description}</p>
                <p>Category : {data.category}</p>
                <p>Total Lectures : {data.numbersOflectures || 0}</p>
                <p>{data.createdBy}</p>
            </div>
        </div>


    )
}

export default CourseCard