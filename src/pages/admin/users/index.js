import { helpHttp } from 'services/helpHttp'
import React from 'react'
import { useEffect, useState } from 'react'
import Grid from 'components/Grid'

const UsersPage = () => {

    const [users, setUsers] = useState([])

     useEffect(()=>{
        const getUsers = async () => {
         
            helpHttp().get('http://localhost:3000/api/user')
            .then(setUsers)
            .catch(err=>console.log(err))
        }

        getUsers()
    },[])

    console.log(users)

  return (
    <>
    {
        users.length > 0 && <Grid items={users} type={"users"}/>
    }
    </>
  )
}

export default UsersPage

