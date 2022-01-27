import React from 'react'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'
import style from "./UserContent.module.css"
import { UserContentData } from './UserContentData'
import * as FiIcons from 'react-icons/fi';
import { useState } from 'react'
import GetAllUser from '../Hooks/GET/GetAllUser';
import GetAllCategory from '../Hooks/GET/GetAllCategory';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Axios from 'axios';
import swal from 'sweetalert';

export default function UserContent(props) {
    let history = useNavigate();
    const { state, getData } = GetAllUser(props)
    const state2 = GetAllCategory(props)
    const token = useSelector((state) => state.dataUser.token)

    // console.log(state ? state.data.data : null);
    // const [Data, setData] = useState(UserContentData)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setShow(index)

    }
    const dataUpdate = {
        idd: "",
        category_idd: "",
    }
    const [Dataset, setKategori] = useState(dataUpdate)

    const handleChange = (event) => {
        setKategori({ ...Dataset, [event.target.name]: event.target.value });
        // console.log("ini name", event.target.name);
        // console.log("ini value", event.target.value);

    }

    const handleDelete = (index) => {
        //     // event.preventDefault();
        //     console.log("ini index", event);

        //     const newData = Data.filter((e, i) => {
        //         if (i !== event) {
        //             return e

        //         }
        //         console.log("ini di dalem");
        //     })

        //     console.log("ini new data", newData);
        //     console.log("ini data", Data);
        //     setData(newData)
        // console.log(index);
        const URL = `http://localhost:1234/user/` + index + ``
        Axios.delete(URL
        )
            .then(res => {
                getData()
                // console.log("ini get data");
            })
            .catch(error => {
                // this.setError()
                console.log(error)
                if (error.response) {
                    console.log("--------------------------------------------------")
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    if (error.response.status === 401) {
                        history("/Login");
                        swal({
                            title: "Error",
                            text: "Mohon Login Terlebih Dahulu",
                            icon: "error",
                        });
                    }
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log("*************************")

                    // The request was made but no response was received
                    // error.request is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    console.log("++++++++++++++++++++++++")
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }

    const handleUpdate = async (index) => {
        console.log("in data", Dataset);
        const URLPut = `http://localhost:1234/user/upgrade`
        await Axios.put(URLPut,
            {
                id: Dataset.idd,
                category_id: Dataset.category_idd,
            }, {
            headers: { "Authorization": `Bearer ${token}` },
        })
            .then(res => {
                getData()
                console.log("berhasil");
            })
            .catch(error => {
                // this.setError()
                console.log(error)
                if (error.response) {
                    console.log("--------------------------------------------------")
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    if (error.response.status === 401) {
                        history("/Login");
                        swal({
                            title: "Error",
                            text: "Mohon Login Terlebih Dahulu",
                            icon: "error",
                        });
                    }
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log("*************************")

                    // The request was made but no response was received
                    // error.request is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    console.log("++++++++++++++++++++++++")
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }


    return (
        // <></>
        <div>
            <Container>
                <h6 className={style.text}>Hasil</h6>
                <Row>
                    {
                        state?.data.data.map((item, index) => {
                            // console.log("ini item", item);
                            return (
                                <div key={index}>
                                    <div className={style.box}>
                                        <div className={style.Posisi}>
                                            <FiIcons.FiUser size={20} className={style.space} />
                                            <h6>{item ? item.Username : null}</h6>
                                        </div>
                                        <div className={style.butPosisi}>
                                            <button className={style.buttonDel} onClick={() => handleDelete(item.ID)}>Hapus</button>
                                            <button className={style.buttonDel}
                                                //  onClick={() => handleUpdate(item.ID)}
                                                onClick={() => handleShow(item.ID)}
                                            >Update</button>
                                            {/* <h6>Hapus</h6> 
                                        <h6>Posis</h6> */}
                                            <Form>
                                                <Modal show={show == item.ID} onHide={handleClose} animation={false}

                                                    size="lg"
                                                    aria-labelledby="contained-modal-title-vcenter"
                                                    centered
                                                >
                                                    {/* {console.log(item)} */}
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Update To Moderator</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>

                                                        <br />
                                                        <h6>ID USER :{item ? item.ID : null}
                                                            <input
                                                                type="text"
                                                                value={Dataset.idd}
                                                                name="idd"
                                                                onChange={handleChange}
                                                            />

                                                        </h6>
                                                        <h6>Name : {item ? item.Username : null}</h6>
                                                        <h6>Kategori : {Dataset.category_idd}</h6>
                                                        <br />

                                                        <Form.Select className={style.texts}
                                                            onChange={handleChange}
                                                            name="category_idd"
                                                            value={Dataset.category_idd}
                                                        >
                                                            <option>Kategori</option>
                                                            {
                                                                state2?.data.data.map((item, index) => {
                                                                    // console.log(item);
                                                                    return (
                                                                        <>

                                                                            <option value={item ? item.ID : null}>{item ? item.Name : null}</option>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </Form.Select>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary"
                                                            onClick={handleClose}>
                                                            Cancel
                                                        </Button>
                                                        <Button variant="primary"
                                                            onClick={() => handleUpdate(item.ID)}
                                                        >
                                                            Update
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Form>
                                        </div>
                                    </div >

                                </div >

                            )
                        })

                    }
                </Row >
            </Container >

        </div >
    )
}
