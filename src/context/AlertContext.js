import { createContext, useState } from "react"

const AlertContext = createContext()

const AlertProvider = ({children})=>{
    const [alert, setAlert ] = useState({
        message:"",
        type:"null"
    })

    const data = {alert, setAlert}

    return <AlertContext.Provider value={data}>{children}</AlertContext.Provider>
}

export {AlertContext, AlertProvider}