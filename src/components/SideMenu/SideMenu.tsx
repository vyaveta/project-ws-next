import { setShowSideBarAction } from "@/Redux/Actions"
import { navbarTitles } from "@/database/datas"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect } from "react"
import {HiMenuAlt4 , HiX} from 'react-icons/hi'
import { useDispatch } from "react-redux"
import styles from './SideMenu.module.css'

export const SideMenu : React.FC = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    
    useEffect(() => {
      const scrollY = window.scrollY;
      window.scrollTo(0,0)
      // document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
      return () => {
        // document.body.style.height = '';
        document.body.style.overflow = 'auto';
        window.scrollTo(0, scrollY);
      }
    },[])

    return (
        <motion.div
        className={`absolute w-full h-full bg-white flex flex-col align-top top-0 ${styles.container}`}
        whileInView={{x:[300,0]}}
        transition={{duration: 0.85, ease: 'easeOut'}}
        >
          <HiX 
          onClick={() => setShowSideBarAction(false,dispatch)}
          size={50} 
          className="text-blue-500" />
          <div className="flex flex-col gap-3 justify-center items-center h-3/4 w-full px-2">
            {
                navbarTitles.map((item,index) => (
                    <div
                    onClick={() => {
                      router.push(`/${item.url}`)
                      setShowSideBarAction(false,dispatch)
                    }}
                    className="py-5 hover:bg-neutral-300 w-full rounded-lg"
                    key={`sideBar${index}`}>
                    <h2 className="text-blue-500 font-semibold text-md text-center text-lg cursor-pointer"
                    >{item.title}</h2>
                    </div>
                ))
            }
          </div>
        </motion.div>
    )
}