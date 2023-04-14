import Image from 'next/image'
import style from '../styles/index.module.css'
import { Nunito } from 'next/font/google'
import { cources, featureTabs, sloganArray, titleSlogan } from '@/database/datas'
import Card from '@/components/Cards/Card'
import { Quote } from '@/components/Quotes/Quote'

const font = Nunito({
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <div className={`${style.container} flex flex-col justify-center gap-2 pt-20 md:pt-0 md:justify-center md:gap-5 w-full p-5`} >
       <h1 className='text-white md:text-2xl lg:text3xl xl:text-4xl text-xl font-bold 
       capitalize ease-in transition hover:ease-in duration-300' >{titleSlogan}</h1>
       <div>
        {
          sloganArray.map((item,index) => (
            <div
            className='flex flex-col px-3 py-3'
            key={`${index}sloganArrayinIndex`} >
              <p className='text-white transition hover:ease-in ease-in duration-3000 md:text-lg lg:text-xl' > <span className='text-blue-500' >{item.title}</span> : {item.slogan}</p>
            </div>
          ))
        }
       </div>
       <div className='flex gap-3 px-2 w-full flex-wrap' >
        {
          featureTabs.map((item,index) => (
            <button className='secondary-button' key={`featureButtons${index}`}>{item.title}</button>
          ))
        }
       </div>
      </div>
      <div>
        <div className='flex items-center justify-center'>
          <h2 className='text-blue-500 text-xl md:text-2xl lg:text-4xl font-semibold md:font-bold' >Availabe Cources</h2>
        </div>
        <div className='flex flex-row gap-3 flex-wrap justify-evenly mt-5' >
        {
          cources.map((item,index) => (
            <Card key={`cources${index}`} item={item} />
          ))
        }
        </div>
        <Quote />
       </div>
    </>
  )
}
