import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem('hasVisited')
    const isLoginPage = router.pathname === '/login'

    if (isFirstVisit && !isLoginPage) {
      localStorage.setItem('hasVisited', 'true')
      router.push('/login')
    } else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div>Carregando...</div>
      </div>
    )
  }

  if (router.pathname === '/login') {
    return <Component {...pageProps} />
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}