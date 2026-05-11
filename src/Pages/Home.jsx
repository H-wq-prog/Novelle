import React from 'react'

export default function Home() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}
