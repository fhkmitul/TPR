import React from 'react';
import Hero from '../Hero';
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import Services from '../Services';
import FeatureRooms from '../FeatureRooms';

export default function Home() {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starts at $200">
                    <Link to="/rooms" className="btn-default">our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
            <FeatureRooms/>
        </React.Fragment>
    )
}
