import styles from "./Contacts.module.css"
import { Component } from "react";

export default class Contacts extends Component {
    render() {
        return <div className={styles.div}>
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.div}>
            <p className={styles.text}>Фильтер по імені</p>
            <input value={this.props.value} onChange={(e) => {this.props.handleChange(e.target.value)}} className={styles.input} name="nameInput"></input>
        </div>
        <ul className={styles.list}>
            {this.props.contacts.map((contact) => {
                return <li className={styles.item} key={contact.id}>
                    <p className={styles.text}>{contact.name}</p>
                    <p className={styles.text}>{contact.number}</p>
                    <button onClick={() => {this.props.deleteContact(contact.id)}} type='button'>Delete</button>
                </li>;
            })}
        </ul>
    </div>
}}