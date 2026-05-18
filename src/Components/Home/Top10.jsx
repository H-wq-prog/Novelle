import React from 'react'
import style from './Home.module.css'
import { books } from "./booksData"
export default function Top10() {

    return (
        <div className={style.container}>

            <h1 className={style.headerSection}>Top 10 This Week</h1>
            <div className={`${style.books} d-flex  flex-wrap gap-5 `}>
                {books.slice(2, 10).map((item, index) => (
                    <div className={`${style.book} d-flex align-items-end`}>

                        <div className={`${style.number}`}>
                            <span>{index + 1}</span>
                        </div>
                        <div className={`${style.image}`}>
                            <img src={item.image.src} alt={item.image.alt} className={`w-100 rounded-3 `} />
                        </div>

                    </div>
                ))}

            </div>


        </div>
    )
}
