import React from 'react'
import { Link } from "react-router-dom"

function Account({ details }) {

    const storeActiveUser = () =>{
        sessionStorage.setItem("activeUser",details.id)
    }

    return (
        <Link style={{textDecoration:"none"}} to={`profile/${details.id}`} onClick={storeActiveUser}>
            <li className='account'>
                <img src={details.img} alt={details.name} className='profilePic' />
                <p className='username'>{details.name}</p>
                <div className="borderLine"></div>
            </li>
        </Link>
    )
}

export default Account