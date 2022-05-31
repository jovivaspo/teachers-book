import React from 'react'
import Alert from './Alert'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Alert/>
            <main className='main_container'>
                {children}
            </main>
          
            <style jsx>
                {`
                .main_container{
                    height:100vh;
                    max-width:1200px;
                    margin:0 auto;
                    padding:1em;
                   
                }

                `}
            </style>
        </>

    )
}

export default Layout