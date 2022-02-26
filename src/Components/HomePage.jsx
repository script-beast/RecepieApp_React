import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className='homebody'>
            <Link className='homea' to="/step1"> <div> Recepie Book</div> </Link>
        </div>
    )
}
