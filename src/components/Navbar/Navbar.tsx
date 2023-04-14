import React from 'react'
import style from './Navbar.module.css'
import { navbarTitles, schoolName } from '@/database/datas'
import { useRouter } from 'next/router'

import { CgMenuGridO } from 'react-icons/cg'
import { setShowSideBarAction } from '@/Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { SideMenu } from '../SideMenu/SideMenu'

const Navbar = () => {
    const showSidebar = useSelector((state: RootState) => state.tkmReduxStates.showSideBar)
    const router = useRouter()
    const dispatch = useDispatch()
    return (
        <nav>
            <nav className={`${style.container} md:justify-around justify-between`}>
                <h1 className='font-bold text-blue-500 cursor-pointer text-lg md:text-xl lg:text-2xl'
                onClick={() => router.push('/')}
                >{schoolName}</h1>
                <div className={`md:flex flex-row items-center justify-center lg:gap-10 hidden`} >
                    {
                        navbarTitles.map((item, index) => (
                            <h2 className='font-bold text-blue-500 px-5 py-2 cursor-pointer
                            rounded-xl text-lg  hover:shadow-md'
                            onClick={() => router.push(`/${item.url}`)}
                            key={`navbarItems${index}`}>{item.title}</h2>
                        ))
                    }
                </div>
                <div className='active:bg-neutral-300 p-4 rounded-lg' >
                    <CgMenuGridO
                    onClick={() => setShowSideBarAction(true, dispatch)}
                    size={20} className='md:hidden text-blue-500' />
                </div>
            </nav>
            {
                showSidebar && <SideMenu /> 
            }
        </nav>
    )
}

export default Navbar