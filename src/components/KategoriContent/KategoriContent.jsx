import React from 'react'
import { Container, Row, Col, Button, Image, Modal, Form } from 'react-bootstrap'
import style from "./KategoriContent.module.css"
import * as FiIcons from 'react-icons/fi';
import { useState } from 'react'
import gambar from "../../img/adminKategori.png"
import GetAllCategory from '../Hooks/GET/GetAllCategory';
import NewGwtAllCategory from '../Hooks/GET/NewGetAllCategory';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import swal from 'sweetalert';


export default function KategoriContent(props) {
    let history = useNavigate();

    const stateGetAllCategory = GetAllCategory(props)
    const { state, getData } = NewGwtAllCategory(props)

    // console.log("ini stategetall", state);

    const dataKategori = {
        kategori: "",
    }
    const [Data, setKategori] = useState(dataKategori)

    const handleChange = (event) => {
        setKategori({ ...Data, [event.target.name]: event.target.value });
        console.log("ini name", event.target.name);
        console.log("ini value", event.target.value);

    }

    const handleEdit = (index) => {
        const URLPut = `http://localhost:1234/category/` + index + ``
        Axios.put(URLPut,
            {
                // email: data.fileRegis,
                name: Data.kategori,
            }
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

    const handleDelete = (index) => {
        // console.log("ini index", index);
        const URL = `http://localhost:1234/category/` + index + ``
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setShow(index)
    }

    return (
        <div>
            <Container>
                <h6 className={style.text}>Hasil</h6>
                {
                    state ?
                        state?.data.data.map((item, index) => {
                            // console.log("ini item", item ? item : null);
                            return (
                                <div key={index}>
                                    <div className={style.box}>
                                        <div className={style.Posisi}>
                                            {/* <FiIcons.FiUser size={20} className={style.space} /> */}
                                            <Image src={gambar} width="20px" className={style.img} />
                                            <h6>{item ? item.Name : null}</h6>
                                        </div>
                                        <div className={style.butPosisi}>
                                            {/* <Button className={style.buttonDel} onClick={() => handleDelete(index)}>Hapus</Button> */}
                                            {/* <Button className={style.buttonDel} >Hapus</Button> */}
                                            {/* <input type="submit" className={style.delete} value="Hapus" /> */}
                                            {/* <h6>Hapus</h6> 
                                        <h6>Posis</h6> */}

                                            <button
                                                type="submit"
                                                className={style.delete}
                                                onClick={() => handleDelete(item.ID)}
                                            >Hapus</button>

                                            <button onClick={() => handleShow(item.ID)} className={style.edit}>
                                                Edit
                                            </button>
                                            <Form>
                                                <Modal show={show == item.ID} onHide={handleClose} animation={false}
                                                    size="lg"
                                                    aria-labelledby="contained-modal-title-vcenter"
                                                    centered
                                                >
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Thread</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>

                                                        <br />
                                                        <h6>Kategori : {item ? item.Name : null}</h6>
                                                        <br />
                                                        <Form.Control
                                                            type="text"
                                                            className={style.inputKat}
                                                            name="kategori"
                                                            value={Data.kategori}
                                                            onChange={handleChange}
                                                        />
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary"
                                                            onClick={handleClose}>
                                                            Cancel
                                                        </Button>
                                                        <Button variant="primary"
                                                            onClick={() => handleEdit(item.ID)}
                                                        >
                                                            Save
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Form>

                                            {/* <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        /> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        null
                }
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}
