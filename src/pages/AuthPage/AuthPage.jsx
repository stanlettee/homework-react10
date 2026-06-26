import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, loginUser, logoutUser } from "../../redux/users/usersOperation";
import styles from "./AuthPage.module.css"

export const AuthPage = () => {
    const [isRegistering, setIsRegistering] = useState(true)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value.trim()
        const password = form.password.value.trim()

        if (!isRegistering) {
            dispatch(loginUser({ email, password }))
        } else {
            dispatch(createUser({ email, password }))
        }



        console.log(email, password)
        form.reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} name="email" type="email" placeholder="Enter your email" />
            <input className={styles.input} name="password" type="password" placeholder="Enter your password" />
            <button className={styles.button} type="submit">{isRegistering ? "Register" : "Login"}</button>
            <button className={styles.button} type="button" onClick={() => dispatch(logoutUser())}>Logout</button>
            <button className={styles.button} type="button" onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? "Switch to Login" : "Switch to Register"}
            </button>
        </form>


    )
}