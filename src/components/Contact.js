import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <p><a href="mailto:adam.uddin@city.ac.uk?subject=motorsports">adam.uddin@city.ac.uk</a></p>
                        <p><a href="mailto:anais.lecerf@city.ac.uk?subject=motorsports">anais.lecerf@city.ac.uk</a></p>
                    </div>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Northampton Square, Clerkenwell, London EC1V 0HB</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
