import styles from './Phonebook.module.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Phonebook = ({ addContact }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value
        const number = form.elements.number.value
        addContact(name, number);
        form.reset();
    }

    return <div className={styles.div}>
            <h2 className={styles.title}>Phonebook</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <TextField id="outlined-basic" label="Name" variant="outlined" required  type="text" name="name"/>
                <TextField id="outlined-basic" label="Number" variant="outlined" required  type="number" name="number"/>
                <Button variant="outlined" type="submit">Add Contact</Button>
                {/* <button type='submit' className={styles.button}>Add contact</button> */}
            </form>
        </div>
}