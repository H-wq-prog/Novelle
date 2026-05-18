import React from 'react'
import style from './Card.module.css'
import HomeStyle from "../../Home/Home.module.css"

export default function Card() {
    const cards = [
        { icon: { src: new URL("../../../assets/drama.png", import.meta.url).href, alt: "section icone" }, title: "Drama" },
        { icon: { src: new URL("../../../assets/write.png", import.meta.url).href, alt: "section icone" }, title: "Classical" },
        { icon: { src: new URL("../../../assets/searsh.png", import.meta.url).href, alt: "section icone" }, title: "Mystery" },
        { icon: { src: new URL("../../../assets/brain.png", import.meta.url).href, alt: "section icone" }, title: "Philosophy" },

    ]

    return (
        <div className={HomeStyle.container}>
            <h1 className={HomeStyle.headerSection}>Explore Genres</h1>
            <div className={` row ${style.cards} d-flex justify-content-around  `}>
                {cards.map((item) => (
                    <div className={`${style.card} col-12 col-md-3 d-flex justify-content-center align-items-center flex-column rounded-5`}>
                        <div className="image">
                            <img src={item.icon.src} alt={item.icon.alt} />
                        </div>
                        <span className="title">
                            {item.title}
                        </span>
                    </div>


                ))}

            </div>
        </div>
    )
}
