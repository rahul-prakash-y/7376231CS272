import React from "react"
import { axiosClient } from "../../utils"

export function HomePage(){
    const [message,setMessage] = React.useState("")

    React.useEffect(()=>{
        const getMessage = async () =>{
            try {
                const res: any = await axiosClient.get("/api");
                console.log("res: ", res)
                if(res.data.message){
                    setMessage(res.data.message)
                }
                else{
                    console.log("No message found.")
                }
                
            } catch (error) {
                console.log("Error while fetching message: ",error);
            }
        }
        getMessage()
    },[])
    
    return(
        <div className="h-screen w-screen flex items-center justify-center flex-col gap-10">
            <h1 className="text-2xl text-blue-700" >Home page</h1>
            <h1 className="text-xl text-red-700" >{message}</h1>
        </div>
    )
}