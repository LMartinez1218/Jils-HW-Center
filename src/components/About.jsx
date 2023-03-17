import React from 'react';

function About () {


    return(
        <div className='about'>
            <div className='container'>
                <div className='common'>
                    <h1 className='about-title'>About Us</h1>
                    <div className='underline-border'></div>
                    <div className='row g-650 alignCenter'>
                        <div className='col-6'>
                            <div className='about_img'>
                                <img src='./images/resize-childcare.jpg' alt='' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='about-info'>
                                <h1><br /> Founded in 2011, <br /></h1>
                                <p>Jil's Homework Center has become not only a homework help site,<br /> but a safe haven for children around the community.<br /> Studies show that Homework help enhances a child's foundational learning.<br /> At Jil's, we aim to solidify fundamental skills that your child will need for school.<br /> By creating a safe space and a healthy enviroment<br /> our staff gets to conduct one on one time with homework help.<br /> Striving to aid those in need while rebuilding confidence for our young learners.</p>
                                <div className="about_buttons">
                                            <a href="/Contact" className="btn btn-outline">Contact us Now</a>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About ;