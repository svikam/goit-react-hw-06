import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={s.list}>
            {contacts.map(contact => (
                <li key={contact.id} className={s.card}>
                    <Contact
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                        onDelete={onDelete}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;