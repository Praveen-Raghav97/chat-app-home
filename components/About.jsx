import { IconFlagStar, IconFreeRights, IconGlobe, IconLock, IconSearch, IconSignRight, IconStar, IconTextCaption, IconUser, IconUserDollar } from '@tabler/icons-react';
import React from 'react'
import { Header } from './Header';
import { Cards } from './Cards';
import AboutPage from './AboutPage';

const About = () => {
    

  return (
    <>
     <Header heading={"About us"}/>
    <div className='min-h-screen   w-full py-10 flex items-center flex-col'>
        
      <div className=' max-w-[870px] mx-auto px-4 text-center py-4 mb-4'>
        <h1 className='text-3xl mb-2 font-semibold'>The best site to Chat with <span className='text-purple-500 font-extrabold'> Male and Female Strangers</span>.</h1>
        <p className='text-lg text-gray-500 font-semibold mt-2 text-center'>Many text and video chat apps offer various features for meeting random strangers or chatting without bots, but not all of them are modern, secure and feature rich with a diverse interesting people from around the globe.</p>
      </div>
      <div className='container mx-auto px-4'>
      <Cards/>
      </div>
      
    </div>
    <AboutPage/>
    </>
  
  )
}

export default About
