import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
};

function RoomsFilter({room}) {
    const context = useContext(RoomContext);
    const {handleChange, type, capacity, price, minSize, maxSize, breakfast, pets} = context;
    
    let types = getUnique(room, 'type');
    types = ['all',...types];
    types = types.map((item, index) => { 
        return(
            <option value ={item} key={index}>
                {item}
            </option>
        )
    });

    let people = getUnique(room, 'capacity');
    people = people.map((item, index)=>{
        return(
            <option value={item} key ={index}>
                {item}
            </option>
        )
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">rooms type</label>
                    <select name="type" id="type" value={type} onChange={handleChange} className="form-control">
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">guests capacity</label>
                    <select name="capacity" id="capacity" value={capacity} onChange={handleChange} className="form-control">
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price (USD)</label>
                    <input type="number" name ="price" id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="size" >room size (SQFT)</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id ="size" value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" id ="size" value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name ="breakfast" id ="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name ="pets" id ="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>

        </section>
    )
}

export default RoomsFilter
