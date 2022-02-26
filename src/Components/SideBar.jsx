import React from 'react'
import './SideBar.css'

export default function SideBar(props) {

    const toggle = () => {
        document.getElementById('menu').classList.toggle('fa-times');
        document.getElementById('header').classList.toggle('toggle');
    }

    const additemClick = (e) => {
        props.setdata((prev) => {
            return {
                ...prev,
                [e.target.outerText]: 1
            }
        });
    }

    return (
        <>
            <header id='header' className='sidheader'>
                <div className="user">
                    <h3 className="name">{props.title}</h3>
                </div>
                <nav className="sidnavbar">
                    <ul>
                    {
                        Object.keys(props.data).map((key, i) => {
                            return <li key={i} onClick={additemClick} className='navli'>{key}</li>
                        })
                    }
                    </ul>
                </nav>
            </header>
            <div id="menu" className="fas fa-bars" onClick={toggle}></div>
        </>
    )
}
