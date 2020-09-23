import React from 'react'; 
import Hero from '../Hero';
import Banner from '../Banner';
import { Link } from 'react-router-dom';

export default function Default() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link to="/" className="btn-default">return home</Link>
            </Banner>
        </Hero>
    )
}
