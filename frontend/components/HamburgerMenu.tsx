import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (path: string) => {
    setIsOpen(false) 
    router.push(path)
  }

  return (
    <div className={styles.menuContainer}>
      <button 
        className={styles.hamburgerButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </button>

      {isOpen && (
        <div className={styles.menuOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.menuContent} onClick={(e) => e.stopPropagation()}>
            <h3>Menu</h3>
            <ul>
              <li onClick={() => handleNavigation('/')}>Home</li>
              <li onClick={() => handleNavigation('/list')}>Itens</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu