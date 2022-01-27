import React, { useState } from 'react'
import { Col, Container, Image, Row, Form, Button, InputGroup } from 'react-bootstrap'
import style from "./KategoriInput.module.css"
import gambar from "../../img/adminKategori.png"
import { KategoriData } from '../KategoriContent/KategoriData'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import swal from 'sweetalert';

export default function KategoriInput(props) {

    const dataKategori = {
        kategori: "",
    }
    let history = useNavigate();
    const [Data, setKategori] = useState(dataKategori)
    // const [form, setForm] = useState({
    //     todo: '',
    //     status: false
    // })
    const handleChange = (event) => {
        setKategori({ ...Data, [event.target.name]: event.target.value });
        console.log("ini name", event.target.name);
        console.log("ini value", event.target.value);

    }

    const handleSubmit = async (e) => {
        console.log(Data);
        let isTrue = false;
        const URL = `http://34.101.171.217:1234/category`
        await Axios.post(URL,
            {
                // email: data.fileRegis,
                name: Data.kategori,
            })
            .then(res => {
                console.log(res);
                // console.log(res.data.token);
                // dispatch(setToken(res.data.token));
                if (res) {
                    console.log("berhasil")
                    isTrue = true;
                }
            }).catch(error => {
                // this.setError()
                console.log(error)
                if (error.response) {
                    console.log("--------------------------------------------------")
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
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

        if (isTrue) {
            console.log()
            // dispatch(login(res))
            history("/Login");
            swal({
                title: "Success",
                text: "Input Kategori berhasil",
                icon: "success",
            });
        } else {
            return swal({
                title: "Error",
                text: "Error",
                icon: "error",
            });
            // e.preventDefault();
        }
    }


    return (
        <div className={style.space}>
            <Container>
                <Row>
                    <Col>
                        <h6>Tambah Kategori</h6>
                        <Form onSubmit={handleSubmit}>
                            <div className={style.box}>
                                <Image src={gambar} width="30px" className={style.img} />
                                <Form.Control
                                    type="text"
                                    className={style.inputKat}
                                    name="kategori"
                                    value={Data.kategori}
                                    onChange={handleChange}
                                />
                                {/* <input type="submit" className={style.subKat} value="Tambah" /> */}
                                <button type="submit" className={style.subKat}>Tambah</button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
