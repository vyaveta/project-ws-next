export const Quote = () => {
    return (
       <div className='flex flex-col-reverse md:flex-row items-center justify-evenly'>
        <p className="text-blue-500 font-semibold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magni.</p>
        <img 
        className='rounded-full'
        width={300}
        src="https://media.npr.org/assets/img/2021/01/06/gettyimages-1144029246-078c0658d34d11a6a677d8613756fab4ec7cdb36.jpg" alt="" />
       </div>
    )
}