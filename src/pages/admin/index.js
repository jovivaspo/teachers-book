import Button from 'components/Button'

import React from 'react'

const admin = () => {



  return (
    <>
      <div className='admin_container'>
        <Button text={"Ver Usuarios"} link={'/admin/users'}/>
        <Button text={"Crear Usuarios"}/>
      </div>
      <style jsx>
        {`
        .admin_container{
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:80px;
          align-items:center;
          height:100%
        }
        `}
      </style>
    </>
  )
}

export default admin