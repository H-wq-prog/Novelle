import React from 'react'
import style from './SideBar.module.css'

export default function SideBar() {
    const links = [
        { icon: "fa-solid fa-book-open", title: "Currently Reading" },
        { icon: "fa-regular fa-bookmark", title: "Want to Read" },
        { icon: "fa-regular fa-circle-check", title: "Finished" },
        { icon: "fa-solid fa-chart-simple", title: "Reading Stats" },

    ]
    return (

        <div className='fixed-button sidebar-container'>

            <div className={style.contianer}>
                <div className={`${style.title}`}>
                    <h1>My Library</h1>
                    <span>Personal Sanctuary</span>
                </div>
                <div className={`${style.links}  `}>

                    <ul>
                        {
                            links.map((items, index) => (
                                <li className='d-flex align-items-center gap-2'><i class={items.icon}></i> {items.title}</li>
                            ))
                        }
                    </ul>
                    <button>+Add New Book</button>
                </div>

            </div>

        </div>
    )
}
