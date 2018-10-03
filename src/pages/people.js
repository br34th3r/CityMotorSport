import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerPeople from '../components/BannerPeople'

import adam from '../assets/images/adam.jpg'
import ana from '../assets/images/ana.jpg'
import peter from '../assets/images/peter.jpg'
import josh from '../assets/images/josh.jpg'

const People = (props) => (
    <Layout>
        <Helmet>
            <title>Karting | City University of London</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerPeople />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>President - Adam Uddin</h2>
                        <p><span className="image left" style={{ maxWidth: "200px" }}><img src={adam} alt="Adam" /></span></p>
                    </header>
                    <p>Adam has had a keen interest in Karting and Motorsports for many years. One of his favourite pass times is watching and playing Formula One and he stands adamantly by the fact that he has never once missed a race. No person on earth could be more dedicated to motorsport than Adam and as such he founded this society to gather like-minded people to share in his passion for the sports as well as to enjoy spending time with people who all have similar interests. Adam is dedicated to his work and commited to his study at City, but will definitely always find the time to have a race with you, either on a console or in person.</p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <header className="major">
                        <h2>Communications Officer - Anais Lecerf</h2>
                        <p><span className="image left" style={{ maxWidth: "200px" }}><img src={ana} alt="Anais" /></span></p>
                    </header>
                    <p>Anais shares a keen love of motorsports with Adam and is always ready to enjoy a race with him or anyone else in the society. Originally from France, Anais moved to London to study Journalism at City. Realising there was some interest in Motorsports, Anais made herself involved and immediately was designated the position of communications officer for her likeable and outgoing personality. If you ever need anything or have any questions to do with the society, Anais is definitely the person to talk to!</p>
                </div>
            </section>
            <section id="three">
                <div className="inner">
                    <header className="major">
                        <h2>Finance Officer - Peter Rutkowski</h2>
                        <p><span className="image left" style={{ maxWidth: "200px" }}><img src={peter} alt="Peter" /></span></p>
                    </header>
                    <p>Peter takes motorsport incredibly seriously. His intentions to race in the BUKC league next year are taken with great enthusiasm in the group and his keen ability for maths makes him an incredible asset to the motorsports society. Peter shares a passion for motorsports among the rest of the society members and creates an incredible contribution to the group with his treasury skills. His budgeting ability and mathematical talents allow the motorsports society to thrive and function for a low price for everyone involved in the society.</p>
                </div>
            </section>
            <section id="four">
                <div className="inner">
                    <header className="major">
                        <h2>Digital Engineer - Josh Boddy</h2>
                        <p><span className="image left" style={{ maxWidth: "200px" }}><img src={josh} alt="Josh" /></span></p>
                    </header>
                    <p>Josh has had a keen love for biking for most of his life. He has never been the 'sit at home' type of guy, he prefers to head out and keep active, enjoying the time that he can riding bikes, driving cars or just generally speeding as fast as he can through life. Josh having originally lived in England, but moving abroad for 14 years, has an astounding cultural awareness and is accepting of all shapes and sizes of people. So if you are ever looking for someone to hang out with, then you know where to go!</p>
                </div>
            </section>
        </div>
    </Layout>
)

export default People
