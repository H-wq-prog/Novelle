import React from 'react'
import style from "./Login.module.css"
import { useNavigate, Link } from "react-router-dom";
import image from '../../assets/StylizedBook.svg';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
        const navigate = useNavigate(); // تعريف التوجيه
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // --- التأكد من وجود البيانات (Validation) ---
        if ( !formData.email || !formData.password) {
            alert("يرجى ملء جميع الحقول");
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:3000/auth/Login',
                formData
            );

            console.log("Success:", response.data);
             

            // --- التحويل لصفحة الـ Home فقط عند النجاح ---
            navigate('/home');

        } catch (error) {
            console.error(error);
            alert(error.response?.data?.msg || "حدث خطأ أثناء التسجيل");
        }
    };
    return (
        <div className={` page-fade-in vh-100 d-flex align-items-center justify-content-center ${style.container}`}>
            <div className={`${style.parent} d-flex align-items-center justify-content-center`}>
            <div className={`${style.left} d-flex flex-column justify-content-center align-items-center  `}>
                <div className={`${style.header}`}>
                    <h1>Literary Haven</h1>
                    <span>Your quiet corner of the digital world
                        <br />for reading, reflecting, and
                        <br />connecting.</span>
                </div>
                           <div className={`${style.images} d-flex justify-content-center align-items-center `}>
                                  <img src={image} alt="bookicone" className={`position-absolute`} />
                                  <img className={`w-100 rounded-circle`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSAIqwLrpa4u03xNYuP4dcRA97-OWA_q1B0FL8UBwoOTYDYSHOCiO59KOkwQtp3Si1sIxqXyc-AlXIoPwIWuiT4IZMpmsEBO030tVFhMD4Dur05bqOF_4XvsOGdMHL-VuRxn8zy38n655ohCDnY7OJprU1HPKbVqajFtAcAQzDX-12RyOH-rnZsoijbveBt3fh6jxy7Y3uBJBMthja8rxIZrLvvHJyRgS4zdSDWJDnG_vVnAEvv4DXeel8jemR8YytWbaGQ3BKralH" alt="book" />
          
                              </div>
            </div>

            <div className={`${style.right} d-flex flex-column gap-2`}>
                <h2>Welcome Back</h2>
                <span>Log in to continue your reading journey.</span>
                <form className={`d-flex flex-column`} onSubmit={handleSubmit} onChange={handleChange}>
                    <label className={style.label} htmlFor="email"> Email </label>
                    <input type="email" name='username' id='email' placeholder='jane@example.com' />
                    <label htmlFor="password"> Password </label>
                    <input type="password" name='username' id='password' placeholder='••••••••' />
                    <div className={`d-flex justify-content-between ${style.options}`}>
                        <div>
                            <input type="checkbox" name='iremeber' id='check' />
                            <label htmlFor="check">Remember me</label>
                        </div>
                        <a href="#">Forgot password</a>
                    </div>
                    <button  type="submit" >Log In</button>
                </form>
                <div className={`text-center `}>
                    <span>Don't have an account? </span>
                    <Link to="/signup">Sign up</Link>
                </div>

            </div>
        </div>
        </div>
    )
}
