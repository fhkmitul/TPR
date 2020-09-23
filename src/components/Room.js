import React from 'react';
import {Link} from 'react-router-dom';
import baseImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

function Room({room}) {
    let {name, slug, images, price} = room;
    return (
        <div className="col-9 mx-auto my-3 col-md-6 col-lg-3">
            <article className="room">
                <div className="img-container">
                    <img src={images[0] || baseImg} alt="single room"/>
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per night </p>
                    </div>
                    <Link to={`/rooms/${slug}`} className="btn-default room-link">Features</Link>
                </div>
                <p className="room-info">{name}</p>
            </article>
        </div>
    )
}

Room.propTypes ={
    room:PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}

export default Room
