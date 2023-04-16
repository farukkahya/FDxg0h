import { useState } from 'react'

const Tabs = () => {
  const [active, setActive] = useState()
  return (
    <div className='mt-44 flex items-center'>
      <button className='font-extrabold text-4xl mx-1 bg-auth-blue opacity-60 rounded-full w-2 h-2' ><span className='hidden'>.</span></button>
      <button className='font-extrabold text-4xl mx-2 bg-orange-500 rounded-full w-3 h-3' ><span className='hidden'>.</span></button>
      <button className='font-extrabold text-4xl mx-1 bg-auth-blue opacity-60 rounded-full w-2 h-2' ><span className='hidden'>.</span></button>
    </div>
  )
}

export default Tabs