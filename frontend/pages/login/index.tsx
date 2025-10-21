import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/')
  }

  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.slice(0, 15) 
  //   setEmail(value)
  // }

  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.slice(0, 15)
  //   setPassword(value)
  // }

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
              // onChange={handleEmailChange}
              className={styles.input}
              placeholder="seu@email.com"
              maxLength={15}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              // onChange={handlePasswordChange}
              className={styles.input}
              placeholder="Sua senha"
              maxLength={15}
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