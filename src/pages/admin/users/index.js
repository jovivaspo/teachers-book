import { helpHttp } from 'services/helpHttp'
import React from 'react'
import { useEffect, useState } from 'react'
import Grid from 'components/Grid'
import { USER } from 'services/api'
import Title from 'components/Title'
import Table from 'components/Table'

const UsersPage = () => {

    const [users, setUsers] = useState([])

     useEffect(()=>{
        const getUsers = async () => {
         
            helpHttp().get(USER)
            .then(setUsers)
            .catch(err=>console.log(err))
        }

        getUsers()
    },[])

    console.log(users)

  return (
    <>
      <Title title={"Usuarios"}/>
    {users?.length > 0 && <Table items={users} type={"users"} />}
    </>
  )
}

export default UsersPage

