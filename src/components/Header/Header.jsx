import styles from './Header.module.css'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux' // Импортировали useSelector
import { logoutUser } from '../../redux/users/usersOperation'
import { selectEmail } from '../../redux/users/usersSelectors'

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
                                <button type="button" onClick={() => dispatch(logoutUser())}>
                                    Logout
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    )}