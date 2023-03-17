import React from "react";


function Services () {


    const header = {
        mainHeader: "Our Services",
        subHeading: "These are the following services we provide",
    };

    const state = [
        {
            id: 1,
            icon: './'
        }
    ]

    return (
        <div className="skills">
            <div className="skills_header">
                <div className="common">
                    <h6 className="heading">{header.mainHeader}</h6>
                    <h2 className="subheading">{header.subHeading}</h2>
                    <div className="commonBorder"></div>
                    
                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <div className="skills_box">
                                    <img src={info.icon} alt="" className="commonIcons" />
                                    <h4 className="skills_box-header">{info.heading}</h4>
                                    <p className="skills_box-p">{info.text}</p>
                        </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services;