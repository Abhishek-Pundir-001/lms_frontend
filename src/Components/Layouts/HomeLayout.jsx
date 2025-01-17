
import { AiFillCloseCircle } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';

function HomeLayout({ children }) {

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const role = useSelector((state) => state?.auth?.role)


    function changeWidth() {
        const drawerSide = document.getElementsByClassName('drawer-side');
        drawerSide[0].style.width = 'auto'
    }

    function hideDrawer() {
        const element = document.getElementsByClassName('drawer-toggle')
        element[0].checked = false
        changeWidth()
    }

    function handleLogout(){
        
    }

    return (
        <div>
            <div className="min-h-[90vh] absolute">
                <div className="drawer absolute left-0 z-50 w-fit bg-slate-900">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="cursor-pointer relative">
                            <FiMenu size={'30px'} className='m-4' onClick={changeWidth} color='white' />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content w-48 min-h-full sm:w-80 p-4 relative">
                            <li className="w-fit absolute right-2 z-50">
                                <button onClick={hideDrawer}>
                                    <AiFillCloseCircle
                                        size={"25px"}
                                    />
                                </button>
                            </li>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            {role &&
                                <li>
                                    <Link to='/'>AdminDashboard</Link>
                                </li>}
                            <li>
                                <Link to='courses'>Courses</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact us</Link>
                            </li>
                            <li>
                                <Link to='/about'>About us</Link>
                            </li>
                            {!isLoggedIn && ( 
                             <li className='absolute bottom-4 w-[90%]'>
                               <div className='w-full flex'>
                                <Link to='/login'className='w-1/2 bg-pink-600 text-center rounded-md'><button className='px-4 py-2 text-white'>Login</button></Link>
                                <Link to='/signup' className='w-1/2 bg-purple-600 text-center rounded-md'><button className=' px-4 py-2 text-white'>signUp</button></Link>
                               </div>
                           </li>
                            )}
                            {isLoggedIn && ( 
                             <li className='absolute bottom-4 w-[90%]'>
                               <div className='w-full flex'>
                                <Link to='/userprofile'className='w-1/2 bg-pink-600 text-center rounded-md'><button className='px-4 py-2 text-white'>Profile</button></Link>
                                <Link onClick={handleLogout} className='w-1/2 bg-purple-600 text-center rounded-md'><button className=' px-4 py-2 text-white'>Logout</button></Link>
                               </div>
                           </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            {children}
            <Footer />
        </div>

    )
}
export default HomeLayout