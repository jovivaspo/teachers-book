import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='main_container'>
                {children}
            </main>
            <style jsx>
                {`
                .main_container{
                    height:100vh;
                    padding:1em
                }

                `}
            </style>
        </>

    )
}

export default Layout