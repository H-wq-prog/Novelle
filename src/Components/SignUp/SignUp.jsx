import React from 'react'
import style from './SignUp.module.css'
import image from '../../assets/StylizedBook.svg'
import { Link } from "react-router-dom";

export default function SignUp() {
    const handleSubmit = (e) => {
        e.preventDefault(); // السطر ده بيمنع الكلام الأصفر اللي طالع في الصورة
        // هنا كود اللوجين بتاعك
    };
    return (
        <div className="page-fade-in">
            <div className={`${style.container} d-flex align-items-center justify-content-center vh-100 m-auto`}>

                <div className={`${style.left} d-flex flex-column justify-content-center align-items-center gap-4 `}>
                    <h1>Literary Haven</h1>
                    <span>Your quiet corner of the digital world
                        for reading, reflecting, and
                        connecting.</span>
                    <div className={`${style.images} d-flex justify-content-center align-items-center `}>
                        <img src={image} alt="bookicone" className={`position-absolute`} />
                        <img className={`w-100 rounded-circle`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSAIqwLrpa4u03xNYuP4dcRA97-OWA_q1B0FL8UBwoOTYDYSHOCiO59KOkwQtp3Si1sIxqXyc-AlXIoPwIWuiT4IZMpmsEBO030tVFhMD4Dur05bqOF_4XvsOGdMHL-VuRxn8zy38n655ohCDnY7OJprU1HPKbVqajFtAcAQzDX-12RyOH-rnZsoijbveBt3fh6jxy7Y3uBJBMthja8rxIZrLvvHJyRgS4zdSDWJDnG_vVnAEvv4DXeel8jemR8YytWbaGQ3BKralH" alt="book" />

                    </div>
                </div>

                <div className={`${style.right} d-flex flex-column gap-2`}>
                    <h2>Welcome Back</h2>
                    <span className='mb-2'>Log in to continue your reading journey.</span>
                    <form action="" className={`d-flex flex-column `}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='Jane Doe' name='username' />
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='jane@example.com' name='email' />
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='••••••••' name='password' />
                        <div className={`${style.options} d-flex justify-content-between mb-2`}>
                            <div className={`${style.chack}`}>
                                <input type="checkbox" id='chack' name='remember' />
                                <label htmlFor="chack" >Remember me</label>
                            </div>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button className={style.but}> <Link to="/home">Create Account</Link>  </button>
                    </form>
                    <div className={`${style.login} w-100 text-center`}>
                        <span>Already have an account? </span><a href="#"><Link to="/login">Log in</Link></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
