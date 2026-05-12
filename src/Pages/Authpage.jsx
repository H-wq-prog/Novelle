import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUp from '../Components/SignUp/SignUp'
 import Login from '../Components/Login/Login'
export default function Authpage() {
    return (

        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

        </Routes>
        // <>
        //     <SignUp></SignUp>

        // </>

    )
}
