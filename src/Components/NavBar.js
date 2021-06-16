import React, { useEffect, useState } from 'react'
import './NavBar.css'

function NavBar() {

    const [show , setShow] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY > 100) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])


    return (
        <div className={`nav ${show ? "nav--black" : ""}`}>

               <img
        className="netflix-logo"
        src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"}
        alt="Netflix Logo"
      />
      <img
        className="netflix-avatar"
        src={"https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png"}
        alt="Netflix Avatar"
      />
        </div>
    )
}

export default NavBar
