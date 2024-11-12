import React from 'react'
import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addContact } from '../services/allApi';
import { toast } from 'react-toastify';
import { addResponseContext } from '../Context/Context';

function Add() {
    const [show, setShow] = useState(false);
    const [contact, setContact] = useState({
        name: "", email: "", phone: ""
    })
    const {addResponse,setAddResponse}=useContext(addResponseContext)




    const handleAdd = async () => {
        try {
            console.log(contact)
            const { name, email, phone } = contact
            if (!name || !email || !phone) {
                toast.warning("Please Enter Valid Information")
            }
            else {
                const res = await addContact(contact)
                console.log(res)
                if (res.status == 201) {
                    toast.success("Upload Successfull!!")
                    handleClose()
                    setAddResponse(res)
                }
                else {
                    toast.error(' Upload Failed')
                }

            }
        } catch (err) {
            console.log(err)
            toast.error("something Went wrong")
        }
    }

    const handleClose = () => {
        setShow(false);
        setContact({
            name: "", email: "", phone: ""
        })
    }
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='p-4'>
                <button className='btn btn-info' onClick={handleShow}><i className="fa-solid fa-user-plus" style={{ color: "#ffffff", }} /></button>
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Contacts</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-info'>
                    <input type="text" placeholder='Enter Name' onChange={(e) => { setContact({ ...contact, name: e.target.value }) }} className='form-control mb-3' />
                    <input type="email" placeholder='Enter Email' onChange={(e) => { setContact({ ...contact, email: e.target.value }) }} className='form-control mb-3' />
                    <input type="phone" placeholder=' Enter Phone Number' onChange={(e) => { setContact({ ...contact, phone: e.target.value }) }} className='form-control mb-3' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleAdd}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Add
