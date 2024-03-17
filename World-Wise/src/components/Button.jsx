/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './Button.module.css'

function Button({children, onClick, type}) {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}
export default Button
