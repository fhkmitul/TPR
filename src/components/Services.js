import React, { Component } from 'react';
import Title from './Title';

import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';


export class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title: "free cocktail",
                info: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
            },
            {
                icon: <FaHiking/>,
                title: "endless hiking",
                info: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttle",
                info: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
            },
            {
                icon: <FaBeer/>,
                title: "strong beer",
                info: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
            },
            
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="container">
                    <div className="row">
                        {this.state.services.map((item, index)=>{
                            return(
                                <div key={index}  className="col-9 mx-auto my-3 col-md-6 col-lg-3" >
                                    <article className="service">
                                        <span>{item.icon}</span>
                                        <h6>{item.title}</h6>
                                        <p>{item.info}</p>
                                    </article>
                                </div>
                                )
                            })}
                        </div>
                    </div>
            
            </section>
        )
    }
}

export default Services
