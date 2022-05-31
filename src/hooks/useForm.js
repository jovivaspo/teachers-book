import { AlertContext } from 'context/AlertContext'
import {useState, useContext} from 'react'
import { USER } from 'services/api'
import { helpHttp } from 'services/helpHttp'

const initialForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword:""
}

const useForm = (type) => {

    const {setAlert} = useContext(AlertContext)

    const [userForm, setUserForm] = useState(initialForm)
    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = () => {
      
        
        if(type === "create"){
            if(userForm.name === "" || userForm === "" || userForm.password === "" || userForm.confirmPassword === ""){
             return   setAlert({
                    message:"Rellene todos los campos",
                    type:  "warning"
                })
            }
            if(userForm.password !== userForm.confirmPassword){
              return  setAlert({
                    message:"Las contraseñas no coinciden",
                    type:  "warning"
                })
            }

            helpHttp().post(USER,{
                headers: {
                    "Content-Type": "application/json"
                },
                body:{
                    name: userForm.name,
                    email: userForm.email,
                    password: userForm.password
                }
            })
            .then(res=>{
                console.log(res)
                setAlert({
                    message:res.error? res.error : res.message,
                    type: res.error? "error" : "success"
                })
            })
        }
    }

  return {userForm, handleChange, handleSubmit}

  
}

export default useForm