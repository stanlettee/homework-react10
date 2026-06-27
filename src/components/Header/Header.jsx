import styles from './Header.module.css'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux' // Импортировали useSelector
import { logoutUser } from '../../redux/users/usersOperation'
import { selectEmail } from '../../redux/users/usersSelectors'
import Button from '@mui/material/Button';

export const Header = () => {
    const dispatch = useDispatch()
    const email = useSelector(selectEmail)
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/" className={styles.link}>Authorisation</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/home" className={styles.link}>Home</Link>
                    </li>
                    
                    {email && (
                        <li className={styles.item}>
                            <div className={styles.box}>
                                <p className={styles.user}>{email}</p>
                                <Button variant="outlined" color="error" type="button" onClick={() => dispatch(logoutUser())}>
                                    Logout
                                </Button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    )}