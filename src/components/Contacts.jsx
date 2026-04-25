import styles from "./Contacts.module.css"

export const Contacts = ({ filter, contacts, deleteContact, handleChange }) => {
    return <div className={styles.div}>
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.div}>
            <p className={styles.text}>Фильтер по імені</p>
            <input onChange={(e) => {handleChange(e.target.value)}} value={filter} className={styles.input} name="nameInput"></input>
        </div>
        <ul className={styles.list}>
            {contacts.map((contact) => {
                return <li className={styles.item} key={contact.id}>
                    <p className={styles.text}>{contact.name}</p>
                    <p className={styles.text}>{contact.number}</p>
                    <button onClick={() => {deleteContact(contact.id)}} type='button'>Delete</button>
                </li>;
            })}
        </ul>
    </div>

}