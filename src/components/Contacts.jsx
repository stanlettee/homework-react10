import styles from "./Contacts.module.css"

export const Contacts = ({contacts, handleChange, value}) => {
    return <div className={styles.div}>
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.div}>
            <p className={styles.text}>Фильтер по імені</p>
            <input value={value} onChange={(e) => {handleChange(e.target.value)}} className={styles.input} name="nameInput"></input>
        </div>
        <ul className={styles.list}>
            {contacts.map((contact) => {
                return <li className={styles.item} key={contact.id}>
                    <p className={styles.text}>{contact.name}</p>
                    <p className={styles.text}>{contact.number}</p>
                </li>;
            })}
        </ul>
    </div>
}