import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, loginUser, logoutUser } from "../../redux/users/usersOperation";
import styles from "./AuthPage.module.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
            <TextField id="outlined-basic" label="Email" variant="outlined" className={styles.input} name="email" type="email" placeholder="Enter your email" />
            <TextField id="outlined-basic" label="Password" variant="outlined" className={styles.input} name="password" type="password" placeholder="Enter your password" />
            <Button variant="contained" color="success" className={styles.button} type="submit">{isRegistering ? "Register" : "Login"}</Button>
            <Button variant="contained" color="error" className={styles.button} type="button" onClick={() => dispatch(logoutUser())}>Logout</Button>
            <Button variant="contained" className={styles.button} type="button" onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? "Switch to Login" : "Switch to Register"}
            </Button>
        </form>


    )
}