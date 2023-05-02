import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../Constants';
import { error } from 'jquery';
import { ToastContainer, Toast, toast } from 'react-toastify';

function AddProduct({ show, setShow }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [productCategory, setProductCategory] = useState([]);
    const [data,setData]=useState({});

    const updateData = e =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const submit = e =>{
        e.preventDefault()
        console.log(data);
        axios.post(base_url+'Product',{
            name:data.name,
            description:data.description,
            price:data.price,
            categoryId:data.category
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
            toast.error("Something went wrong ",{
                position:'bottom-center',
                autoClose:1000,
                hideProgressBar:false,
                theme:'light'
            })

        });
    }
    useEffect(() => {
        axios
            .get(base_url + `Category`)
            .then((res) => {
                console.log(res.data);
                setProductCategory(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

 

    console.log(productCategory);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="UserName">
                            <Form.Label>Product title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Product title"
                                autoFocus
                                name="name"
                                onChange={updateData}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Price">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Product Price"
                                autoFocus
                                name="price"
                                onChange={updateData}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="category">
                            <Form.Select aria-label="category" name="category" onChange={updateData}>
                                <option>select category</option>
                                {productCategory.map((i) => (
                                    <option key={i.id} value={i.id}>
                                        {i.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                onChange={updateData}
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary p-2 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary p-2 rounded"
                        onClick={submit}
                    >
                        Add Product
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddProduct;
