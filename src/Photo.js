import React from 'react';

export default function Photo(props) {
    const { potd } = props;
    return (
        <div className="imgContainer">
            <img alt='Astronamy Photo of the Day' src={potd}></img>
        </div>
    )
}
