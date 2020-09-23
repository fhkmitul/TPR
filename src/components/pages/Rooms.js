import React from 'react';
import Hero from '../Hero';
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../RoomsContainer';

export default function Rooms() {
    return (
        <React.Fragment>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-default">return home</Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </React.Fragment>
    )
}
