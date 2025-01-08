import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function ServiceCards({title, imgurl, text, url}) {
    return (
        <div className='flex flex-col border-[1px] gap-y-8  py-10 px-8 rounded-3xl justify-evenly items-center bg-white hover:shadow-md hover:bg-[#3B076410]  transition-all ease-in-out duration-500'>
            <h3 className='font-bold text-2xl px-24 text-center'>{title}</h3>
            <img src={imgurl} alt="" />
            <p className='text-base text-center'>{text}</p>
            <button className='rounded-full border-[1px] px-8 py-3'><Link href={`/${url}`}>Read More</Link></button>
        </div>
    )
}

ServiceCards.propTypes = {}

export default ServiceCards
