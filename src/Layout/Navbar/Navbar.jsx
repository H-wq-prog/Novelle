import React from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/logo.png'
import avater from '../../assets/chick.png'
export default function Navbar({ userName = "user" }) {
    const links = [
        { title: "Home" },
        { title: "Feed" },
        { title: "Catalog" }
    ]
    return (
        <div className='fixed-button sticky-element'>
            <div className={`${style.contianer} d-flex justify-content-between align-items-center p-4`}>
                <div className={`${style.navlogo} d-flex justify-content-center align-items-center`}>

                    <div className={`${style.logo}`}>
                        <img src={logo} alt="logo" className={`w-100 `} />
                    </div>

                    <h2>Novelle</h2>
                </div>
                <div className={`${style.navlinks}`}>

                    <ul className='d-flex justify-content-between align-items-center'>

                        {links.map((tit, index) => (
                            <li><a href="#" key={index} className='d-flex justify-content-center flex-row-reverse'>{tit.title}</a></li>
                        ))}

                    </ul>
                </div>
                <div className={`${style.user} d-flex justify-content-between`}>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    {/* <div className={`${style.avatar} d-flex justify-content-center align-items-center`}>{userName.charAt(0).toUpperCase()}</div> */}
                    <div className={`${style.avatar}`}><img src={avater} alt="" className='w-100' /></div>
                </div>

            </div>
        </div>
    )
}
