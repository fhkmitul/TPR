import React, { Component } from 'react';
import {RoomContext} from '../context';
import Loading from './Loading'; 
import Title from './Title';
import Room from './Room';
import styled from 'styled-components';

export class FeatureRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms: rooms} = this.context;
        rooms = rooms.map(room =>{
            return <Room key={room.id} room={room}/>
        })
        return (
            <SectionFR>
                <Title title="featured rooms"/>
                <div className="container">
                    <div className="row">
                        {loading?<Loading/>:rooms}
                    </div>
                </div>
            </SectionFR>
        )
    }
}
const SectionFR = styled.section`
    padding: 5rem 0;
`

export default FeatureRooms
