import Logo from '@/images/Logo.png'
import Image from 'next/image'
import { MagnifyingGlassIcon, UserIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='bg-white w-full flex flex-row justify-between items-center py-11 absolute top-0 left-0 shadow-md'>
      <div className="ml-14" id="logo">
        <Image width={60} height={36} src={Logo} alt="logo" />
      </div>
      <div className='' id="searchBar">
        <input className='w-800 h-12 rounded text-auth-blue opacity-40 px-10 absolute left-64 top-9 mt-2' type="text" placeholder="Search" />
        <MagnifyingGlassIcon width={20} height={20} className='text-auth-blue opacity-40 absolute top-14 left-64 ml-4 pt-1' />
      </div>
      <div className='flex mr-20' id="icons">
        <div className='w-10 mt-3 h-8'>
          <UserIcon className='text-auth-blue' width={24} height={28} />
        </div>
        <div className='w-10 mt-3 h-8'>
          <HeartIcon className='text-auth-blue' width={24} height={28} />
        </div>
        <div className='w-10 mt-3 h-8'>
          <ShoppingCartIcon className='text-auth-blue' width={24} height={28} />
        </div>
      </div>
    </header>
  )
}

export default Header