import React from 'react'
import { motion as m } from 'framer-motion'
const Contact = () => {
    return (
        <m.main
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className='text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16'>
            <div className='my-96 p-1 overflow-hidden'>
                <m.h1 
                animate={{y: 0}}
                initial={{y: '100%'}}
                transition={{delay: 0.5, duration: 0.5}}
                className='text-4xl text-center lg:text-right lg:text-9x1'>Let's Talk</m.h1>
            </div>
            <div className='flex gap-40'>
                <div className='lg:text-2x1 text-base'>
                    <h4>Find me:</h4>
                </div>
                <div className='lg:text-6x1 text-2x1 underline'>
                    <ul>
                        <li className='pb-2'>Github</li>
                        <li className='pb-2'>LinkedIn</li>
                        <li className='pb-2'>Discord</li>

                    </ul>
                </div>
            </div>
        </m.main>
    )
}

export default Contact