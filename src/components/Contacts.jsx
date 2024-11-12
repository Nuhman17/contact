import React from 'react'
import { useState, useEffect,useContext } from 'react';

import { getContact } from '../services/allApi';
import { addResponseContext,editResponseContext } from '../Context/Context';
import { deleteContact } from '../services/allApi';
import { toast } from 'react-toastify';
import Edit from './Edit';
function Contacts() {

    const [contacts, setContacts] = useState([])
    const {addResponse,setAddResponse}=useContext(addResponseContext)

    const {editResponse,setEditResponse}=useContext(editResponseContext)


    useEffect(() => {
        getData()
    }, [addResponse,editResponse])
    const getData = async () => {
        const res = await getContact()
        console.log(res)
        if(res.status==200){
            setContacts(res.data)
        }
    }
    const handleDelete=async(id)=>{
        const res=await deleteContact(id)
        console.log(res)
        if(res.status==200){
            toast.success("Contact Details Deleted Successfully!!")
            getData()
        }else{
            toast.error("Something Went wrong")
        }
        

    }

    return (

        <>
            <h2 className='mt-4 text-center'>All Contacts</h2>
            <div className='d-flex justify-content-center '>
                {
                   contacts.length>0 ?
                   <table className='table table-bordered'>
                  
                   <thead>
                       <tr>
                           <th>Id</th>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Phone Number</th>
                           <th></th>

                       </tr>
                   </thead>
                
                            <tbody>
                            {
                        contacts.map((item,index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td> {item.email} </td>
                                <td>{item.phone}</td>
                                <td>
                                    <div className='d-flex justify-content-center'>
                                       <Edit contacts={item} />
                                        <button className='btn ms-5'onClick={() => { handleDelete(item.id) }}>
                                            <i className="fa-solid fa-trash fa-lg" style={{ color: "#f60915", }} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                                }
                        </tbody>
                            
                   
                 
               </table>
               :
               <h3 className='text-center text-danger'>No Contact Details Available!!</h3>
                }
              


            </div>

           

        </>
    )
}

export default Contacts
