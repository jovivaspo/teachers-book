import React from 'react'
import { useRouter } from 'next/router'

const Button = ({text,color, heigth, width, event, link}) => {

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    if (event){
      event()
    }else{
      router.push(link)
    }
  }
    
  return (
      <>
        <button className='btn' onClick={handleClick}>{text}</button>
        <style jsx>
        {`
        .btn{
          width:${width? width : "130px"};
          height:${heigth? heigth : "36px"};
          color:#fff;
          font-weight:bold;
          background-color:${color? color : "#0D0D0D"};
          border-radius:9999px;
          cursor:pointer;
          border:none;
        }
        `}
      </style>
      </>
  
  )
}

export default Button