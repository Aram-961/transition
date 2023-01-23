import React from 'react'
import Head from 'next/head';
import { motion as m } from 'framer-motion';
const Home = () => {
    return (
        <m.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{opacity: 1}}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className='text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16'>
            <Head>
                <title>Aram</title>
                <meta name='description' content='Generated by next app' />
                <link rel="icon" href="/thirteen.svg" />
            </Head>
            <main>
                <div className='my-96 p-1 '>
                    <h1 className='text-4xl text-center lg:text-right lg:text-9x1'>Aram Istamboulian</h1>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h2>Experience</h2>
                        <h2>Projects</h2>
                        <h2>Get in touch</h2>
                    </div>
                    <div>
                        <h3>I'm a Front End Developer</h3>
                        <h3>anything that can fit this text</h3>
                        <h3>anything that can fit this text</h3>
                    </div>
                </div>
            </main>
        </m.div>
    )
}

export default Home;