import { AlertContext } from 'context/AlertContext'
import Link from 'next/link'
import React from 'react'
import { useContext } from 'react'
import { USER } from 'services/api'
import { getDate } from 'services/getDate'
import { helpHttp } from 'services/helpHttp'
import Button from './Button'

const Table = ({ items, type }) => {

  const { setAlert } = useContext(AlertContext)

  const handleDelete = (url) => {
    const deleteUser = confirm("¿Quieres eliminar este usuario?")

    if (!deleteUser) {
      return false
    }
    console.log(url)
    helpHttp().del(url)
      .then(res => setAlert({
        message: res.error ? res.error : res.message,
        type: res.error ? "error" : "success"
      }))

  }

  return (

    <>
      {
        type === "users" &&
        <div className="table_container">
          <table>
            <thead>
              <tr>
                <th className='header_table'>Nombre</th>
                <th className='header_table'>Email</th>
                <th className='header_table'>Usuario desde</th>
                <th className='header_table'>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td className='item_table'><p>{user.name}</p></td>
                      <td className='item_table'><p>{user.email}</p></td>
                      <td className='item_table'><p>{getDate(user.createdAt).normalized()}</p></td>
                      <td className='item_table'>
                        <Button text={"Editar"} width={"65px"} link={`users/${user._id}`} />
                        <Button text={"Eliminar"} width={"65px"} event={() => handleDelete(`${USER}/${user._id}`)} />
                      </td>
                    </tr>

                  )
                })
              }
            </tbody>
          </table>
        </div>

      }
      <style jsx>
        {`
        .table_container{
          width:90%;
          margin:0 auto;
         
        }
          table{
            width:100%;
            
          }

          th{
            padding-bottom:16px
          }

          tr{
            border-bottom: 1px solid #ccc;
            padding:6px
          }

          .header_table{
            margin-bottom:12px;

          }

          td{
            border-bottom: 1px solid #ccc;
            padding-bottom:6px
          }

          .item_table{
            text-align:center
          }

          .header_table:first-child,
          .item_table:first-child{
            text-align:left;
          }

          .item_table:last-child{
            display:flex;
            justify-content:center;
            gap:8px
          }
          @media only screen and (max-width: 570px) {
            .table_container{
              overflow-x:scroll
            }
            p{
             margin-right:30px
            }
          }
        `}
      </style>
    </>



  )
}

export default Table