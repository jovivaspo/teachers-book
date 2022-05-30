import React from 'react'
import CardUser from './CardUser'


const Grid = ({ items, type }) => {
    return (
        <>
            <div className='grid'>
                {type === "users" ? (items.map((item, index) => {
                    return <CardUser item={item} key={index}/>

                })) :

                    (items.map((item, index) => {
                        return <CardUser item={item} key={index}/>

                    })

                    )}
            </div>
            <style jsx>
                {`
        .grid {
            display: grid;
            min-height: 100vh;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-auto-rows: 160px;
            align-items: center;
            justify-items:center

          }
          
        `}
            </style>
        </>
    )
}

export default Grid