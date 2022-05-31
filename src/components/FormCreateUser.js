import Button from './Button'
import useForm from 'Hooks/useForm'

const FormCreateUser = () => {
   
    const {userForm, handleChange, handleSubmit} = useForm("create")

  return (
    <>
            <div className="container_form">
                <form>
                    <input type="text"
                        name='name'
                        value={userForm.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        autocomplete="off"
                    />
                    <input type="email"
                        name='email'
                        value={userForm.email}
                        onChange={handleChange}
                        placeholder="Email"
                        autocomplete="off"
                    />
                    <input type="password"
                        name='password'
                        value={userForm.password}
                        onChange={handleChange}
                        placeholder="Password"
                        autoComplete='off'
                    />
                    <input type="password"
                        name='confirmPassword'
                        value={userForm.confirmPassword}
                        onChange={handleChange}
                        placeholder="Password"
                        autoComplete='off'
                    />
                    <Button text={"Guardar usuario"} event={handleSubmit}/>
                </form>
                
            </div>
            <style jsx>
                {`
        .container_form{
          display:flex;
          justify-content:center;
          width:100%;
        }

        form{
            display:flex;
            flex-direction:column;
            gap: 12px;
            width:100%;
            justify-content:center;
            align-items:center;

            margin-top:24px
        }

        input{
          
            height:35px;
            width:80%;
            font-size:0.9em;
            border:none;
            border-bottom:solid 1px #ccc;
            margin-bottom:1.5em;
            padding:1em



        }
        `}
            </style>
        </>
  )
}

export default FormCreateUser