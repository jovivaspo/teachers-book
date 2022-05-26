import React from 'react'

const admin = () => {
  return (
    <>
      <div className='admin_container'>
        <div className='user_btn'>Usuarios</div>
        <div className='user_btn'>Eventos</div>
      </div>
      <style jsx>
        {`
        .admin_container{
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:80px;
          align-items:center;
          background-color:red;
          height:100%
        }

        .user_btn{
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

export default admin