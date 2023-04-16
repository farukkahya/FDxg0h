
import Header from '@/Components/Header'
import {useEffect} from 'react'

export default function Home() {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      window.location="/auth"
    }
  }, [])
  
  return (
    <main>
      <Header/>
    </main>
  )
}
