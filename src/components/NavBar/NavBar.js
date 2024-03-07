import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>

            <Link to='/'><h1>Quijano's</h1></Link>   

            <div className='nav-bar'>
                <NavLink to={`/category/men's clothing`}><div className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{<h4>Men's clothing</h4>}</div></NavLink>
                <NavLink to={`/category/women's clothing`}><div className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{<h4>Women's clothing</h4>}</div></NavLink>
                <NavLink to={`/category/electronics`}><div className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{<h4>Electronics</h4>}</div></NavLink>
            </div>

        </nav>
    )
}

export default NavBar