import styles from './Header.module.css'
import Logo from '../public/Logo'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <HamburgerMenu />
      </div>
      <div className={styles.centerSection}>
        <Logo />
      </div>
      <div className={styles.rightSection}>
        {/* Espaço para futuros elementos à direita */}
      </div>
    </header>
  )
}

export default Header