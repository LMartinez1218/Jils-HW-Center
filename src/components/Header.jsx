import React from 'react';

function Header () {
    return (
        <header className='Header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='header_content'>
                            <div className='header-section'>
                                <h1>Jil's Homework Center</h1>
                                <p>Homework Aid | Summer Program</p>
                                <div className='header_button'>
                                    <a href='/Contact' className='btn btn-outline'>Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src=''alt="" className='image' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;