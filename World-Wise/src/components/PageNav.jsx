import {NavLink} from 'react-router-dom'

function PageNav() {
    return (
        <nav>
            <ul className="nav">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default PageNav
