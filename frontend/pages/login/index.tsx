import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Não envia dados para lugar nenhum - apenas navega
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Login</h1>
        
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="seu@email.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Sua senha"
            />
          </div>

          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}