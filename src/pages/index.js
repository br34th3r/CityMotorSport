import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Motorsports | City University of London"
                    meta={[
                        { name: 'description', content: 'Motorsports at City University of London' },
                        { name: 'keywords', content: 'motor, sports, city, university, london, karting, race, vehicle, car, ride, drive' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>What do we Offer?</h3>
                                <p>Find out what City Motorsport Society is Offering You!</p>
                            </header>
                            <Link to="/offer" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Motorsports</h3>
                                <p>Want the full list of Motorsports? Check this out!</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Who is already on board?</h3>
                                <p>Meet the people that make up the City University Motorsport Society!</p>
                            </header>
                            <Link to="/people" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Watch Us Race!</h3>
                                <p>Here is a list of times and places where you can see us do what we love!</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Your Future</h3>
                                <p>What joining the Motorsport society at City could do for your employability!</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>FAQs</h3>
                                <p>Got any questions for us? Click here to see what people are asking! Maybe someone has already got the answer for you!</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>What is the Motorsport Society?</h2>
                            </header>
                            <p>The Motorsports Society at City was founded by Adam Uddin in 2018 as a way to encourage students to persue their passions in all types of motorsports. Adam himself has always been an avid fan of Formula One racing, with his idol being Lewis Hamilton. Wanting to provide the same experience that Hamilton got to his fellow peers at City, Adam founded the Motorsports society to gather like-minded people all in pursuit of one thing... the need, for speed!</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Join Now!</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
