import React from 'react'
import styles from './Login.module.css'

const Login = () => {
  return (
    <>
    <div class={styles.container}>
        <h2>Login</h2>
        <form action="login_process.php" method="POST">
            <div class={styles.formgroup}>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class={styles.formgroup}>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit" class={styles.btn}>Login</button>
        </form>
    </div>
    </>
  )
}

export default Login
