import React from 'react'
import style from './Home.module.css'
export default function Home() {
    return (
        <>
            <div className="Ititle">

                <h1>Welcome back
                    to your personal
                    sanctuary of stories.</h1>
                <q>"A room without books is like a body without a soul." —
                    Cicero</q>
                <span>Cicero</span>
            </div>
            <div className="Curated">
                <h2>Curated for You</h2>

                <div className="bookitem">
                    <div className="bookImage"><img src="" alt="" /></div>
                    <h4></h4>
                    <span></span>
                </div>
            </div>


        </>
    )
}
