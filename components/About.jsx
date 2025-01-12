import { IconFlagStar, IconFreeRights, IconGlobe, IconLock, IconSearch, IconSignRight, IconStar, IconTextCaption, IconUser, IconUserDollar } from '@tabler/icons-react';
import React from 'react'
import { Header } from './Header';
import { Cards } from './Cards';

const About = () => {
    const cardData = [
        {
          id: 1,
          icon: <IconUser className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
          title: "Friends & History",
          description: "Had a fun chat but skipped by accident? Find them in your chat history and add them as a friend.",
        },
        {
          id: 2,
          icon: <IconSearch className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
          title: "Filter by Interest",
          description: "Want to narrow down your search? Use interests, genders or locations to filter the strangers you meet.",
        },
        {
          id: 3,
          icon: <IconTextCaption className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
          title: "Text Chat",
          description: "Not in the mood for video? No problem! You can also chat with strangers via text messages. Full of features.",
        },
        {
          id: 4,
          icon: <IconGlobe className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
          title: "Global Reach",
          description: "Expand horizons and think globally.",
        },
        {
          id: 5,
          icon: <IconLock className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
          title: "Safe & Secure",
          description: "We make use of advanced AI technologies and enhanced spam protection to keep your chats clean.",
        },
        {
          id: 6,
          icon: <IconStar className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
          title: "Feutures rich",
          description: "From sending photos, videos, having voice calls, to sharing GIFs and adding avatars, we have it all.",
        },
      ];

  return (
    <>
     
    <div className='min-h-screen   w-full py-10 flex items-center flex-col'>
        
      <div className=' max-w-[870px] mx-auto px-4 text-center py-4 mb-4'>
        <h1 className='text-3xl mb-2 font-semibold'>The best site to Chat with <span className='text-purple-500 font-extrabold'> Male and Female Strangers</span>.</h1>
        <p className='text-lg text-gray-500 font-semibold mt-2 text-center'>Many text and video chat apps offer various features for meeting random strangers or chatting without bots, but not all of them are modern, secure and feature rich with a diverse interesting people from around the globe.</p>
      </div>
      <div className='container mx-auto px-4'>
      <Cards/>
      </div>
      
    </div></>
   
  )
}

export default About
