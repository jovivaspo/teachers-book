import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
    const router = useRouter()
    console.log(router)

    return (
        <>
            <div className="header">
                <h3>Logo</h3>
                <nav className="menu">
                    {router.pathname.includes("admin")?  
                    <h4>Panel de control</h4> : 
                    "User"}
                </nav>
            </div>
            <style jsx>
                {`
            .header{
                display:flex;
                justify-content:space-around;
                align-items:center;
                height:90px;
                background-color:orange
            },
          
            `}
            </style>
        </>

    )
}

export default Header