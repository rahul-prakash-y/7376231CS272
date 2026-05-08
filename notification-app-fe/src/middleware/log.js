import axios from "axios"

export async function Log(state, level, packages, message){
    try {
        const res = await axios.post("http://4.224.186.213/evaluation-service/logs",{
            state,
            level,
            package: packages,
            message
        })
    } catch (error) {
        console.log( "Error while creating log", error)
    }
}