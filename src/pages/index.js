
import Banner from '@/Components/Banner'
import Header from '@/Components/Header'
import Tabs from '@/Components/Tabs'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      window.location = "/auth"
    }
  }, [])

  return (
    <main>
      <Header />
      <div className='bg-white absolute top-28 h-screen w-screen text-auth-blue flex justify-center'>
        <Banner />
      </div>
      <div className='relative top-96 text-auth-blue flex justify-center' >
        <Tabs />
      </div>
    </main>
  )
}
