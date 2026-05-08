import axios from "axios"
import React from "react"


export function HomePage(){

    const [limit,setLimit] = React.useState(10);
    const [page,setPage] = React.useState(1);
    const [notificationType,setNotificationType] = React.useState("Placement");
    const [notifications, setNotifications] = React.useState([]);

    React.useEffect(()=>{
        const fetchNotifications = async () =>{
            try {
                const response = await axios.get(`http://4.224.186.213/evaluation-service/notifications?limit=${limit}&page=${page}&notification_type=${notificationType}`,
                    {
                        headers:{
                            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYWh1bC5jczIzQGJpdHNhdGh5LmFjLmluIiwiZXhwIjoxNzc4MjM4ODYwLCJpYXQiOjE3NzgyMzc5NjAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJkY2I5YWM5MC00MTE0LTQ5ZWYtOGZiOS02MDhiZTlkNWE1OTIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJyYWh1bCBwIiwic3ViIjoiY2ViNmM3MGYtZmJkMC00NDY5LTg2YWYtZGY2MzdjYjQ4Nzg1In0sImVtYWlsIjoicmFodWwuY3MyM0BiaXRzYXRoeS5hYy5pbiIsIm5hbWUiOiJyYWh1bCBwIiwicm9sbE5vIjoiNzM3NjIzMWNzMjcyIiwiYWNjZXNzQ29kZSI6InVLYUpmbSIsImNsaWVudElEIjoiY2ViNmM3MGYtZmJkMC00NDY5LTg2YWYtZGY2MzdjYjQ4Nzg1IiwiY2xpZW50U2VjcmV0Ijoid0ptcGJHZXpKUkR0RlZwZyJ9.qfo8v2RZaf2qdGJMIKA-7tawYQCbWCY75bEocemb9TU"
                        }
                    }
                );
                if(response.data.notifications.length > 0){
                    setNotifications(response.data.notifications);
                }
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchNotifications()
    },[limit, notificationType, page])
   
    
    return(
        <div className="h-screen w-screen flex flex-col gap-10 p-6">
            <h1 className="text-2xl text-blue-700" >Home page</h1>
            <div className="w-full flex justify-end">
                <div className="flex items-center border  rounded-lg border-gray-400 bg-slate-100 overflow-hidden w-fit">
                    <p onClick={()=> setNotificationType("Event")} className={notificationType === "Event" ? "text-white bg-blue-500 px-4 py-1" :"px-4 py-1" }>Event</p>
                    <p onClick={()=> setNotificationType("Result")} className={notificationType === "Result" ? "text-white bg-blue-500 px-4 py-1" :"px-4 py-1" } >Result</p>
                    <p onClick={()=> setNotificationType("Placement")} className={notificationType === "Placement" ? "text-white bg-blue-500 px-4 py-1" :"px-4 py-1" }>Placement</p>
                </div>
            </div>
            <div className="w-full">
                <div className="grid grid-cols-3 px-4">
                    <h1>ID</h1>
                    <h1>Type</h1>
                    <h1>Message</h1>
                    
                </div>
                    {notifications.map((not,idx)=>{
                        return(
                            <div className="grid grid-cols-3 px-4">
                                <h1 className="text-left">{not.ID}</h1>
                                <h1 className="text-left">{not.Type}</h1>
                                <h1 className="text-left">{not.Message}</h1>
                                
                            </div>
                        )
                    })}
                    
            </div>
        </div>
    )
}