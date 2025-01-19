import React from 'react'
import logo from '../assets/icons/logo.png'
import linkedin from '../assets/icons/linkedin.png'
import github from '../assets/icons/github.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10">
            <aside>
                <Link to={'/'} className='cursor-pointer'><img src={logo} className='size-8' /></Link>
                <p className='font-semibold'>Annual Report Generator<br /><em className='font-normal'>Reports made simpler and easier</em></p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a className='cursor-pointer' href='https://github.com/traxhcxn' target='_blank'><img src={github} className='size-6' /></a>
                    <a className='cursor-pointer' href='https://www.youtube.com/@traxhcxn' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a className='cursor-pointer' href='https://www.linkedin.com/in/subhash-m-b48314325/' target='_blank'><img src={linkedin} className='size-6' /></a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer