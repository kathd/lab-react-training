import React from 'react';
import "./../styles/index.css"

export default function IdCard({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
}) {
    return (
        <div className="id-card">
            <img src={picture} alt={`avatar of ${firstName} ${lastName}`} />
            <div className="infos">
                <b>First Name: {firstName}</b>
                <b>Last Name: {lastName}</b>
                <b>Gender: {gender}</b>
                <b>Height: {height}m</b>
                {/* <b>{birth.toDateString()}</b> */}
            </div>
        </div>
    )
}