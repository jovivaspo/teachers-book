import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
    const router = useRouter()
    

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
                box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
            },
          
            `}
            </style>
        </>

    )
}

export default Header