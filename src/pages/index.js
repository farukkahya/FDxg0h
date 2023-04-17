
import Banner from '@/Components/Banner'
import Header from '@/Components/Header'
import Showcase from '@/Components/Showcase'
import Tabs from '@/Components/Tabs'
import { useEffect, useState } from 'react'
import { Manrope } from 'next/font/google'
import { useSelector } from 'react-redux'

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  /////////////////////////////////////////////////////
  /* Burada kategori bilgilerini aldıktan sonra Showcase componentine göndererek kategorinin id bilgisini gönderdiğim CardGroup componentinde o id bilgisine ait kitapları çekerek listeleme yapmak istemiştim. Kitapların bilgilerini ise CardGroup componentinden Card componentine id bilgisi göndererek Card componentinde göstermek istemiştim. Fakat NextJS öğrenmeye daha yeni başladığım için tecrübesizlikten dolayı bazı oturtamadığım ksıımlar ve eksikliklerim var. O yüzden bu kadar ilerleyebildim. */
  const {booksData} = useSelector(state => state.booksData)
  console.log(booksData)
  ////////////////////////////////////////////////////
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      window.location = "/auth"
    }
  })

  return (
    <main className={`${manrope.className} h-screen bg-white`}>
      <Header />
      <div className='w-screen text-auth-blue flex justify-center'>
        <Banner />
      </div>
      <div className='text-auth-blue flex justify-center' >
        <Tabs />
      </div>
      <Showcase categories={booksData} />
    </main>
  )
}
