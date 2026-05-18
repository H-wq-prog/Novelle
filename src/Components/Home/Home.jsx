import React from 'react'
import style from './Home.module.css'
import CuratedForYou from './CuratedForYou'
import { Tooltip } from 'bootstrap'
import Top10 from './Top10'
import Card from '../Ui/Card/Card'
export default function Home() {
    return (

        <div className="container-fluid">

            <div className={`${style.Ititle} ${style.container}  `}>

                <div className={`${style.title} ms-5 mt-5`}>



                    <h1>Welcome back
                        to your personal
                        sanctuary of stories.</h1>
                    <div className='d-flex justify-content-center align-items-center'>
                        <q>A room without books is like a body without a soul.
                        </q><hr />

                    </div>

                    <span>Cicero</span>
                </div>
            </div>

            <CuratedForYou />

            <Top10 />

            <Card />


        </div>



    )
}
