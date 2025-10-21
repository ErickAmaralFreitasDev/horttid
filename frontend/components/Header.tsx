import { useState, useRef, useEffect } from 'react'
import styles from './Header.module.css'
import Logo from '../public/Logo'
import HamburgerMenu from './HamburgerMenu'
import { useRouter } from 'next/router'

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
  }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    setIsUserMenuOpen(false)
    router.push('/login')
  }
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <HamburgerMenu />
      </div>
      <div className={styles.centerSection}>
        <Logo />
      </div>
      <div className={styles.rightSection}>
        <i 
          className="pi pi-user" 
          style={{ fontSize: '1.5rem', color: '#006F46'}}
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        ></i>
        {isUserMenuOpen && (
          <div className={styles.userMenu}>
            <div className={styles.userMenuItem} onClick={handleLogout}>
              Sair
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header