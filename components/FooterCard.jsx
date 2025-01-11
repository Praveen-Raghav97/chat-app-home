import React from 'react'

const FooterCard = () => {
  return (
    <div className='container mt-20 md:h-[250px] h-auto flex gap-5 flex-col  md:flex-row bg-purple-500 rounded-lg shadow-white shadow-md p-4'>
      <div className='flex-1  p-2'>
<h1 className='text-5xl font-extrabold mb-6 '>Stay in the loop</h1>
<h5 className='text-3xl font-extrabold'>Join our Discord Server to get updates before anyone else.</h5>
      </div>
      <div className='flex-1 flex items-center justify-center gap-10'>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-50 px-6 py-2 text-sm font-semibold text-purple-500 backdrop-blur-3xl">
          Join Discord
        </span>
      </button>
      <button className="relative  inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex  h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-50 px-6 py-2 text-sm font-semibold text-purple-500 backdrop-blur-3xl">
          Contact us
        </span>
      </button>
      </div>
    </div>
  )
}

export default FooterCard
