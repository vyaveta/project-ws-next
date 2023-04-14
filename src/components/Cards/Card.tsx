import Image from 'next/image'
import React from 'react'

interface CardPropObj{
    title: string,
    url: string,
}

interface CardProps{
    item: CardPropObj
}

const Card:React.FC<CardProps> = ({item}) => {
  return (
  <div className='max-w-xs' >
    <img alt='image' className="rounded" src={item.url} width={500} height={500} />
    <div className="mt-2">
      <div>
        <div className="text-xs text-slate-600 uppercase font-bold tracking-wider">{item.title}</div>
        <div className="font-bold text-slate-700 leading-snug">
          {/* <a className="hover:underline">link here</a> */}
        </div>
        {/* <div className="mt-2 text-sm text-slate-600">slajflsfj slf sfs description</div> */}
      </div>
    </div>
  </div>
  )
}

export default Card