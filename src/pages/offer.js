import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerOffer from '../components/BannerOffer'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Offer = (props) => (
    <Layout>
        <Helmet>
            <title>Karting | City University of London</title>
            <meta name="description" content="What do we have to offer you at City Motorsport Society?" />
        </Helmet>

        <BannerOffer />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Social Skills</h2>
                    </header>
                    <p>By interacting with other people over one shared topic of interest, you also get to experience a range of versatile viewpoints that allow you to gain a global perspective. City has a massive, multi-cultural student body that spans an immense amount of different cultures. You will always learn something new about these different cultures as you attend our socials and events. It is a great opportunity to prepare you for the world of business and help you leap and stride forward in your career prospectives.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Offer
