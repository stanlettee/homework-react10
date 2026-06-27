import styles from "./Contacts.module.css"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

export const Contacts = ({ filter, contacts, deleteContact, handleChange }) => {
    console.log("Текущие контакты:", contacts);
    return <div className={styles.div}>
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.div}>
            <p className={styles.text}>Фильтер по імені</p>
            <TextField id="filled-basic" label="Filter" variant="filled" onChange={(e) => { handleChange(e.target.value) }} value={filter} name="nameInput" />
        </div>
        <ul className={styles.list}>
            {contacts.map((contact) => {
                return <li className={styles.item} key={contact.id}>
                    <p className={styles.text}>{contact.name}</p>
                    <p className={styles.text}>{contact.number}</p>
                    <IconButton onClick={() => { deleteContact(contact.id)}} type='button' aria-label="delete" size="large">
                        <DeleteIcon />
                    </IconButton>
                </li>;
            })}
        </ul>
    </div>

}