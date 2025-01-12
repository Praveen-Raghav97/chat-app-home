import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <div className=' max-w-[870px] mx-auto px-4 text-center py-4 mb-4'>
        <h1 className='text-3xl mb-2 font-semibold'>Anonymous Chat,<span className='text-purple-500 font-extrabold'> Meet new people</span>.</h1>
        <p className='text-lg text-gray-500 font-semibold mt-2 text-center'>Find strangers worldwide, the new modern Omegle and OmeTV alternative. Connect with real people, enjoy ad free text and video chats, and build genuine friendships.</p>
      </div>
      
      <div className='flex items-center flex-col gap-20'>
        <div className='flex md:flex-row flex-col items-center gap-4 p-4'>
            <div className=' flex-1 max-w-[600px] p-4 mx-auto px-4 text-start py-4 mb-4'>
            <span className='text-purple-500 font-semibold font-lg'>Strangers turned friends</span>
                <h1 className='text-3xl mb-2 font-semibold my-4'>Chat with Random Strangers With Similar <span className='text-purple-500 font-extrabold'>Interest</span></h1>
                <p className='text-lg text-gray-500 font-semibold mt-2 '>Talk to online strangers who love what you love, Chat about hobbies and enjoy fun conversations - all from one place! Making new friends based on interests is made easy.</p>
            
            </div>
            <div className='flex-1'>
                <img src="https://www.chitchat.gg/_astro/features-03-image-01.CIIUlKu3_Z13IO90.webp" className='w-ful bg-cover' alt="" />
            </div>
        </div>
      <div className='flex md:flex-row-reverse flex-col p-4 items-center gap-4'>
        <div className='flex-1 max-w-[600px] p-4  mx-auto px-4 text-start py-4 mb-4'>
            <span className='text-purple-500 font-semibold font-lg'>Say hello to strangers worldwide</span>
            <h1 className='text-3xl mb-2 font-semibold my-4 '>Simple and Fun Video <span className='text-purple-500 font-extrabold'>Chats</span></h1>
            <p className='text-lg text-gray-500 font-semibold mt-2 '>Enjoy video chats with strangers worldwide, our platform is designed to make it easy and safe to connect with people from all over the world. Meet new people, make friends, and have fun!</p>
        </div>
        <div>
            <img src="https://www.chitchat.gg/_astro/features-03-image-02.DWzUSq7I_LPNSp.webp" alt="" />
        </div>
      </div>
      <div className='flex md:flex-row flex-col p-4 items-center gap-4'>
        <div className='flex-1 max-w-[600px] p-4 mx-auto px-4 text-start py-4 mb-4'>
        <span className='text-purple-500 font-semibold font-lg'>Make the most out of your chats</span>
            <h1 className='text-3xl mb-2 font-semibold my-4'>From Strangers to <span className='text-purple-500 font-extrabold'>Friends</span></h1>
            <p className='text-lg text-gray-500 font-semibold mt-2 '>Discover new people, make real and genuine connections, learn new languages or just have casual text or video chats. Our platform is designed to help you experience the best of online chatting.</p>
        </div>
        <div>
            <img src="https://www.chitchat.gg/_astro/features-03-image-03.DvTmJlRy_1U4Q07.webp" alt="" />
        </div>
      </div>
      </div>

    </div>
  )
}

export default AboutPage
