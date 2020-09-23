import React from 'react';
import Room from './Room';
import { RoomConsumer } from '../context';

function RoomList({room}) {
    return(
        <RoomConsumer>
            {value =>{
                if(room.length===0){
                    return(
                        <div className="empty-search">
                            <h2>unfortunately no room is found</h2>
                        </div>
                    )
                }else{
                    return(
                        <section className="roomList">
                            <div className="container">
                                <div className="row">
                                    {room.map(item => {
                                        return(
                                            <Room key ={item.id} room = {item}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                    )
                }
            }}
        </RoomConsumer>  
    )
}

export default RoomList
