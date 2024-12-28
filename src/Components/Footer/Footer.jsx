import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'

function Footer() {

    let currrentDate = new Date()
    let year = currrentDate.getFullYear()

    return (
        <footer className='relative bottom-0 left-0 h-[8vh] bg-slate-400 p-4 flex items-center justify-between text-white text-lg'>
            <p className='font-medium font-mono'>Copright {year} All rights are reserved</p>
            <div className='flex space-x-4'>
                <a className='hover:text-yellow-400'><BsFacebook /></a>
                <a className='hover:text-yellow-400'><BsInstagram /></a>
                <a className='hover:text-yellow-400'><BsLinkedin /></a>
                <a className='hover:text-yellow-400'><BsTwitter /></a>
            </div>

        </footer>
    )
}

export default Footer