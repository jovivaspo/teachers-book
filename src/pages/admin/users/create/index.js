import {useState} from 'react'

const initialForm =  {
    name:"",
    email:"",
    password:""
}


const CreateUserPage = () => {
    const [userForm,setUserForm] = useState(initialForm)
    const handleChange = (e) => {
        setUserForm({...userForm,
        [e.target.name]:e.target.value
        })
    }


  return (
   <>
    <div className="container_form">
        <form>
            <input type="text"
             name='name'
              value={userForm.name}
               onChange={handleChange}
               placeholder="Nombre"
               />
            <input type="email"
             name='email'
              value={userForm.email}
               onChange={handleChange}
               placeholder="Email"
               />
            <input type="password"
            name='password'
             value={userForm.password}
              onChange={handleChange}
              placeholder="Password"
              />
        </form>
    </div>
    <style jsx>
    {`
        .container_form{
          display:flex;
          justify-content:center;
        }

        form{
            display:flex;
            flex-direction:column;
            gap: 12px;

            margin-top:24px
        }
        `}
    </style>
   </>
  )
}

export default CreateUserPage