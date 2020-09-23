import React, { Component } from 'react';
import {RoomContext} from '../../context';
import { Link } from 'react-router-dom';
import Banner from '../Banner';
import styled from 'styled-components';



export class SingleRoom extends Component {
    constructor(props){
        super(props);

        this.state = {
            slug: this.props.match.params.slug

        }
    }
    static contextType = RoomContext;
    // componentDidMount(){

    // }

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);

        if(!room){
            return(
                <div className="error">
                    <h2>the room does not found...</h2>
                    <Link to="/rooms" className="btn-default">back to rooms</Link>
                </div>
            )
        }
        const {breakfast,capacity,description,extras,images,name,pets,price,size} = room;
        const [disImg, ...restImg] = images;
        return (
            <React.Fragment>
                <StyledHero img ={disImg}>
                    <Banner title ={`${name} room`}>
                        <Link to="/rooms" className="btn-default">back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="container">
                        <div className="row">
                            {restImg.map((item, index) => {
                                return(
                                    <div className="col-10 mx-auto my-2 col-md-6 col-lg-4">
                                        <div className="single-room-img">
                                            <img key ={index} src = {item} alt ={name}/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-8">
                                <article className="desc">
                                    <h3>details</h3>
                                    <p>{description}</p>
                                </article>
                            </div>
                            <div className="col-10 mx-auto col-md-4">
                                <article className="info">
                                    <h3>info</h3>
                                    <h6>price: ${price}</h6>
                                    <h6>size: {size} SQFT</h6>
                                    <h6>max capacity: {capacity > 1? `${capacity} people`:`${capacity} person`}</h6>
                                    <h6>{pets?"pets allowed" : "pets not allowed"}</h6>
                                    <h6>{breakfast && "free breakfast included"}</h6>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div className="container">
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return(
                                <li key={index}>- {item}</li>
                            )
                        })}
                    </ul>
                </section>
                
                </div>
            
            </React.Fragment>
        )
    }
}

const StyledHero = styled.header`
    min-height: 60vh;
    background: url(${props => props.img}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default SingleRoom

