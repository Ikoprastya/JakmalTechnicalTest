import '../index.css';
import { NavLink, Outlet} from 'react-router-dom';


const Header = () => {
        return (
            <body>
                <header>
                    <div className='container-header'>
                        <nav className='nav'>
                            <ul className='nav-items'>
                                <li>
                                    <span className="nav-number">1</span>
                                    <NavLink to="/"  className="nav-link">Delivery</NavLink>
                                </li>
                                <li>&gt;</li>
                                <li>
                                    <span className="nav-number">2</span>
                                    <NavLink to='/payment' className="nav-link">Payment</NavLink>
                                </li>
                                <li>&gt;</li>
                                <li>
                                    <span className="nav-number">3</span>
                                    <NavLink to='/finish' className="nav-link">Finish</NavLink>
                                </li>          
                            </ul>
                        </nav>
                    </div>
                </header>

                <div className='main-content'>
                    <Outlet/>
                </div>

            </body>
        )
    
}

export default Header;