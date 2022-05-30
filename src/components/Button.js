import React from 'react'
import { useRouter } from 'next/router'

const Button = ({text,link}) => {

  const router = useRouter()
    
  return (
      <>
        <div className='btn' onClick={()=>router.push(link)}>{text}</div>
        <style jsx>
        {`
        .btn{
          padding:1em;
          color:#fff;
          font-weight:bold;
          background-color:orange;
          border-radius:9999px;
          cursor:pointer
        }
        `}
      </style>
      </>
  
  )
}

export default Button