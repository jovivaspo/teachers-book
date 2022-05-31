import { AlertContext } from 'context/AlertContext'
import React from 'react'
import { useEffect, useRef, useContext } from 'react'


const color = {
    "success": "green",
    "error": "red",
    "warning": "yellow",
    "null":"transparent"
}

const Alert = () => {

    const refAlert = useRef()

    const {alert, setAlert} = useContext(AlertContext)

    useEffect(() => {
        refAlert.current.style.transform =  "translate(0,0)"
        const timeAlert = setTimeout(() => {
            refAlert.current.style.transform =  "translate(220%,0)"
            setAlert({
                message:"",
                type:"null"
            })
        }, 2000)
        return () => clearTimeout(timeAlert)
    }, [alert])

    return (
        <>
            <div ref={refAlert} className='alert_container hidden'>
                <p className='alert_msg'>{alert?.message}</p>
            </div>
            <style jsx>
                {
                    `
                .alert_container{

                    position:absolute;
                    top:95px;
                    right:5px;
                    
                    width: 240px;
                    max-height: 44px;
                    background-color:${color[alert?.type]};
                    padding:0.5em;
                    border-radius:10px;

                    transform:
                    transition: all 0.5s 

                                        
                }
                .alert_msg{
                    color:#fff;
                    font-weight:bold;

                }
                .hidden{
                    transform: translate(220%,0)
                }
                `
                }
            </style>
        </>
    )


}

export default Alert