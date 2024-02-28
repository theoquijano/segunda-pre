import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to='/' element={<h3>Ecommerce</h3>} />
            
            <div className='Categories'>
                <NavLink to={`/category/men's clothing`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} element={<h4>Men's clothing</h4>}/>
                <NavLink to={`/category/women's clothing`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} element={<h4>Women's clothing</h4>}/>
                <NavLink to={`/category/electronics`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} element={<h4>Electronics</h4>}/>
            </div>

        </nav>
    )
}

export default NavBar