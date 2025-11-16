import styles from './Phonebook.module.css'
import { Component } from 'react'

export default class extends Component {
    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.name.value
        const number = form.elements.number.value
        this.props.addContact(name, number);
        form.reset();
    }

    render () {
        return <div className={styles.div}>
            <h2 className={styles.title}>Phonebook</h2>
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <label className={styles.label} htmlFor="text">Name</label>
                <input required className={styles.input} type="text" name="name"/>
                <label className={styles.label} htmlFor="number">Number</label>
                <input required className={styles.input} type="number" name="number"/>
                <button type='submit' className={styles.button}>Add contact</button>
            </form>
        </div>
    }
}