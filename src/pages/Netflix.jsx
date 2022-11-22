//
import React, { useState } from "react"

import Navbar from "../components/Navbar"
function Netflix() {
    const [isScrolled, setIsScrolled] = useState(false)

    function handlerScroll() {
        window.onscroll(() => {
            setIsScrolled(window.pageYOffset === 0 ? false : true)
            console.log(window.pageYOffset)
            return () => (window.onscroll = null)
        })

    }


    return <div>
        <Navbar isScroll={isScrolled} onScroll={handlerScroll} />
    </div>
}

export default Netflix