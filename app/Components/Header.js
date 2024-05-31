"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [Menu, setMenu] = useState(false)
    const showMenu = () => {
        const elem = document.getElementById("mainMenu");
        const move = Menu ? "-100%" : "79.5px";
        elem.style.top = move;
        elem.style.transition = "ease 0.5s";
        elem.style.transition = "ease-out 0.9s";
        elem.style.zIndex = "9999";
        setMenu(!Menu);
    }

    return (
        <div>
            <div className='p-7 w-full   h-20 xl:p-14 xl:text-lg xl:text-black xl:bg-white bg-black flex items-center justify-between'>
                <div>
                    <div>
                        <h1 className='font-extrabold text-3xl text-white'>ArcLab.</h1>
                    </div>
                </div>
                <div>
                    <button onClick={showMenu} className='text-[#6b8080ca] font-light text-2xl block xl:hidden'>MENU</button>
                </div>

                <div className='xl:block hidden xl:space-x-6'>
                    <Link href="/" className='text-white no-underline'>Home</Link>
                    <Link href="/About" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>About</Link>
                    <Link href="/Team" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>Team</Link>
                    <Link href="/Services" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>Services</Link>
                    <Link href="/Projects" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>Project</Link>
                    <Link href="/Blog" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>Blog</Link>
                    <Link href="/Contact" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>Contact</Link>
                </div>
            </div>
            {/* Slide Menu Start */}
            <div id='mainMenu' className='p-7 absolute top-[-100%] bg-black h-96 w-full flex-col flex xl:hidden space-y-5 text-lg text-white'>
                <div>
                    <Link href="/" className='text-white no-underline'>Home</Link>
                </div>
                <div>
                    <Link href="/About" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>About</Link>
                </div>
                <div>
                    <Link href="/Team" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>Team</Link>
                </div>
                <div>
                    <Link href="/Services" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>Services</Link>
                </div>
                <div>
                    <Link href="/Projects" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>Project</Link>
                </div>
                <div>
                    <Link href="/Blog" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>Blog</Link>
                </div>
                <div>
                    <Link href="/Contact" className='hover:transition-colors hover:text-[#96BB54] text-white no-underline'>Contact</Link>
                </div>
            </div>
            {/* Slide Menu Ends */}
        </div>
    )
}

export default Header
