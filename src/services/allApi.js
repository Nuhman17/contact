import axios  from "axios";

export const addContact=async(data)=>{
    return await axios.post("https://contact-server-nj6f.onrender.com",data)
}

export const getContact=async()=>{
    return await axios.get("https://contact-server-nj6f.onrender.com")
}
export const deleteContact=async(id)=>{
    return await axios.delete(`https://contact-server-nj6f.onrender.com/${id}`)
}
export const updateContact=async(id,data)=>{
    return await axios.put(`https://contact-server-nj6f.onrender.com/${id}`,data)


}