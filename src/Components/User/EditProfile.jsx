import { useState } from "react"
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux"
import { getProfile, updateProfile } from "../../Redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";



function EditProfile() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const id = useSelector((state) => state?.auth?.data?._id)


    const [data, setData] = useState({
        fullName: '',
        avatar: '',
        previewImage: ''
    });

    function handleImage(event) {
        event.preventDefault()
        const uploadedImage = event.target.files[0];
        // console.log(uploadedImage)
        if (uploadedImage) {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setData({
                    ...data, 
                    previewImage: this.result,
                    avatar: uploadedImage
                })
            })
            console.log(data)
        }


       


    }
    function handleUserInput(e) {
        e.preventDefault()
        const { name, value } = e.target
        console.log(name, value)
        console.log(data)
        setData({
            ...data, [name]: value
        })
    }

    async function editUserProfile(e) {
        e.preventDefault();
        if (!data.fullName) {
            toast.error('Name are mandatory');
            return
        }
        else if (!data.avatar) {
            toast.error('avatar is required')
            return
        }

        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("avatar", data.avatar)

        await dispatch(updateProfile([id, formData]));
        await dispatch(getProfile())

        setData({
            fullName: '',
            avatar: '',
            previewImage: ''
        })

        navigate('/userprofile')


    }


    return (
        <div className="h-[100vh] bg-slate-900 flex items-center justify-center">
            <form onSubmit={editUserProfile} encType="multipart/form-data"
                className="w-80 min-h-[18rem] shadow-[0_0_10px_black] p-4 flex flex-col gap-2">
                <label htmlFor="image" className="flex items-center justify-center">
                    {data.previewImage ? <img src={data.previewImage} alt=""
                        id="avatar"
                        className="w-24 h-24 rounded-full"
                        name='avatar'
                    /> : <BsPersonCircle className="w-20 h-20 text-white" />}
                </label>
                <input
                    type="file"
                    id="image"
                    accept=".jpg, .jpeg, .png, .svg"
                    onChange={handleImage}
                    className="invisible"
                />
                <label htmlFor="name" className="text-white">Name:</label>
                <input type="text"
                    className="bg-transparent border-2 p-1 rounded-md text-white"
                    name="fullName"
                    value={data.fullName}
                    onChange={handleUserInput}
                />
                <button
                    className="w-full rounded-md py-2 mt-4 bg-yellow-500 text-white hover:bg-green-400 transition-all ease in out duration-500 font-semibold" type="submit">Edit Profile</button>
            </form>
        </div>
    )
}

export default EditProfile