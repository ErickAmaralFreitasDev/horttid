import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Olá, <span className={styles.user}>usuário</span></h1>
    </div>
  )
}