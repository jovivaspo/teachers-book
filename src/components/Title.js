import React from 'react'

const Title = ({ title }) => {
    return (
        <>
            <div className='title_container'>
                <h2 className='title'>{title.toUpperCase()}</h2>
            </div>
            <style jsx>
                {`

                    .title_container{
                        margin:20px;
                        
                    }

                    .title{
                        font-size:2em
                    }
                
                `}
            </style>
        </>

    )
}

export default Title