import React from 'react';
// import { FaAlignJustify } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Navbar (){
    // const [state, setState] = React.useState(true);

    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='nav_bar container'>
                    <ul className='navbar_left'>
                        <div className='navbar_left-logo'>
                            <img src='./images/supplies.png' alt='' />

                            </div>
                        </ul>

                            {/* {state ? ( */}
                            <ul className='nav-links'>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/About'>About</Link>
                                </li>
                                <li>
                                    <Link to='/Services'>Services</Link>
                                </li>
                                <li>
                                    <Link to='/Contact'>Contact</Link>
                                </li>
                            </ul>
                            {/* ) : (
                                ""
                            )} */}
            </div>
                </div>
                {/* <div className='toggle' conClick={() => setState(!state)}>
                    <FaAlignJustify />
                </div> */}
        </nav>
    )
}

export default Navbar;