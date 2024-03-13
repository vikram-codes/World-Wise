import { NavLink } from 'react-router-dom'
import styles from './AppNav.module.css'



function AppNav() {
    return (
        <div>
            <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to='cities' index>Cities</NavLink>
                </li>
                <li>
                    <NavLink to='countries'>Countries</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/form'></NavLink>
                </li> */}
            </ul>
            </nav>

        </div>
    )
}

export default AppNav
