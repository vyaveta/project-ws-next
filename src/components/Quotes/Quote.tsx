import style from './Quote.module.css'

export const Quote = () => {
    return (
        <div className="flex flex-col gap-2 items-stretch mt-5">
            <div className="flex items-center w-100 flex-col">
                <h2 className="text-center text-blue-500 text-2xl font-bold">Lets Hear what they has to say!</h2>
            </div>

           <div className={`${style.wrapper}`}>

           <article className='flex flex-col-reverse md:flex-row items-center justify-evenly'>
                <div>
                <p className="font-semibold text-lg text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magni.</p>
                <p className="text flex justify-end">- Jack Ma</p>
                </div>
                <img
                    className='rounded-full'
                    width={300}
                    src="https://media.npr.org/assets/img/2021/01/06/gettyimages-1144029246-078c0658d34d11a6a677d8613756fab4ec7cdb36.jpg" alt="" />
            </article>
            <article className='flex flex-col-reverse md:flex-row items-center justify-evenly'>
                <div>
                <p className="font-semibold text-lg text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magni.</p>
                <p className="text flex justify-end">- Jack Ma</p>
                </div>
                <img
                    className='rounded-full'
                    width={300}
                    src="https://media.npr.org/assets/img/2021/01/06/gettyimages-1144029246-078c0658d34d11a6a677d8613756fab4ec7cdb36.jpg" alt="" />
            </article>

           </div>
        </div>
    )
}