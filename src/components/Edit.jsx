import React, { useState ,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateContact } from '../services/allApi';
import { toast } from 'react-toastify';
import { editResponseContext } from '../Context/Context';


function Edit({contacts}) {


    const [show, setShow] = useState(false);
const [details,setDetails]=useState({...contacts})
const {editResponse,setEditResponse}=useContext(editResponseContext)


const handleEdit=async()=>{
    console.log(details)
    const {name,phone,email}=details
    if(!name||!email||!phone){
        toast.warning("Invalid Inputs!!")
    }else{
        const res=await updateContact(contacts.id,details)
        if(res.status==200){
            toast.success(" Contacts Update Successfully!!")
            setEditResponse()
            handleClose()
        }else{
            toast.error("Updation failed!!")
            console.log(res)
        }
    }

}

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn'>
                <i className="fa-solid fa-user-pen fa-lg" onClick={handleShow} style={{ color: "#59b0f3", }} />
            </button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-info'>
                    <input type="text" defaultValue={contacts?.name} placeholder='Enter Name' onChange={(e)=>setDetails({...details,name:e.target.value})} className='form-control mb-3' />
                    <input type="email"  defaultValue={contacts?.email} placeholder='Enter Email' onChange={(e)=>setDetails({...details,email:e.target.value})} className='form-control mb-3' />
                    <input type="phone"  defaultValue={contacts?.phone} placeholder=' Enter Phone Number ' onChange={(e)=>setDetails({...details,phone:e.target.value})} className='form-control mb-3' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleEdit}>Update</Button>
                </Modal.Footer>
            </Modal>




        </>
    )
}

export default Edit
