import React from 'react'
import style from './Home.module.css'
import { books } from './booksData'
export default function CuratedForYou() {

    return (
        <div className={`${style.container} mb-5`}>
            <h1 className={`mb-5 ${style.headerSection}`}>Curated for You</h1>
            <div className={`${style.books} d-flex justify-content-between`}>
                {books.map((item) => (
                    <div className={`${style.book} `}>

                        <div className={`${style.image} mb-3`}>
                            <img src={item.image.src} alt={item.image.alt} className={`w-100 rounded-3 `} />
                        </div>
                        <div className="titles">
                            <h3 >{item.head}</h3>
                            <span>{item.outher}</span>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}
