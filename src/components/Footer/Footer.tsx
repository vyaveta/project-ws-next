import { About, footerDatas } from '@/database/datas'
import style from './Footer.module.css'
import { CustomFaIcon } from '../IconComponent'

export const Footer = () => {

    return (
        <footer className='bg-slate-800 w-full h-50 mt-10 flex flex-row items-start justify-start gap-5 flex-wrap p-5'>
            {
                footerDatas.map((data, index) => (
                    <div key={`${index}fromfooter`} className={`${style.section}`}>
                        <h3 className='text-white font-bold text-2xl'>{data.title}</h3>
                        <div className={`${style.section__details} text-white`}>
                            {
                                data.options.map((item, index) => (
                                    <div key={`footeritem${item.name} ${index}`} className='flex flexrow items-center gap-2 cursor-pointer' >
                                        <CustomFaIcon name={item.icon} />
                                        <h4 >{item.name}</h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            <div className='flex flex-col w-1/2'>
                {
                    <>
                        <h3 className='text-white font-bold text-2xl' >{About.title}</h3>
                        <p className='text-white'>{About.text}</p>
                    </>
                }
            </div>
            <div className='flex flex-col justify-center items-center'>
            <p className='text-white text-sm'>Created by ghss TKM CS 2020-22 Batch</p>
                <p className='text-white text-sm'>© 2023 vyaveta all copyrights recieved</p>
            </div>
        </footer>
    )
}