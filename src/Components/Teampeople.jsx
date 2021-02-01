import React from 'react';

function Teampeople(photo, name, title) {
    return (
        <div className='people'>
            <div className="people-img">
                <img src={photo} alt="" className="team-people-photo"/>
            </div>
            <h2 className="people-name">{name}</h2>
            <p className="people-title">{title}</p>
        </div>
    )
}

export default Teampeople
