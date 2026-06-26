import styles from './Phonebook.module.css'

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
                <label className={styles.label} htmlFor="text">Name</label>
                <input required className={styles.input} type="text" name="name"/>
                <label className={styles.label} htmlFor="number">Number</label>
                <input required className={styles.input} type="number" name="number"/>
                <button type='submit' className={styles.button}>Add contact</button>
            </form>
        </div>
}