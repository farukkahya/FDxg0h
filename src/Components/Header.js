import Logo from '@/images/Logo.png'
import Image from 'next/image'
import { MagnifyingGlassIcon, UserIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='bg-white w-full flex flex-row h-max justify-between shadow-md px-64 py-6'>
      <div className="ml-14 h-10" id="logo">
        <Image width={60} height={36} src={Logo} alt="logo" />
      </div>
      <div className='h-12' id="searchBar">
        <input className='w-800 h-max rounded text-auth-blue opacity-40 py-3 px-10  ' type="text" placeholder="Search" />
        <MagnifyingGlassIcon width={20} height={20} className='text-auth-blue opacity-40 relative -top-9 mt-1 ml-4' />
      </div>
      <div className='flex mr-20' id="icons">
        <div className='mr-3 h-8'>
          <UserIcon className='text-auth-blue' width={24} height={28} />
        </div>
        <div className='mr-3 h-8'>
          <HeartIcon className='text-auth-blue' width={24} height={28} />
        </div>
        <div className='mr-3 h-8'>
          <ShoppingCartIcon className='text-auth-blue' width={24} height={28} />
        </div>
      </div>
    </header>
  )
}

export default Header