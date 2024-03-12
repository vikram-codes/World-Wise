import Logo from "./Logo"
import AppNav from "./AppNav"
import styles from './Sidebar.module.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <Logo />
            <AppNav />
            <p>List of Cities</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} Bhumi. All rights reserved
                </p>
            </footer>
        </div>
    )
}

export default Sidebar
