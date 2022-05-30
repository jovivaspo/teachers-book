import React from 'react'
import { getDate } from 'services/getDate'

const CardUser = ({item,key}) => {
  return (
      <>
        <div key={key} className="container_card">
            <h4>Nombre: {item.name}</h4>
            <p>Email: {item.email}</p>
            <p>Creado: {getDate(item.createdAt).normalized()}</p>
        </div>
        <style jsx>
        {`
        .container_card{
           
            display:flex;
            flex-direction:column;
            gap:1em;

            width:260px;
            height:130px;
            background-color:orange;
            padding:12px;  
            
            border-radius:22px
        }
       
        }
        `}
        </style>
      </>
  
  )
}

export default CardUser