import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import style from "./MessageContent.module.css"
import * as FiIcons from 'react-icons/fi';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import swal from 'sweetalert';
import GetAllMessage from '../Hooks/GET/GetAllMessage';
import { useSelector } from 'react-redux'

export default function MessageContent(props) {
    const { state, getData } = GetAllMessage(props)
    console.log("ini state", state ? state : null);
    let history = useNavigate();
    const token = useSelector((state) => state.dataUser.token)

    const handleDelete = (index) => {
        const URL = `http://localhost:1234/message/` + index + ``
        Axios.delete(URL, {
            headers: { "Authorization": `Bearer ${token}` },
        })
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

    return (
        <div>
            <h6 className={style.text}>Hasil</h6>
            {
                state?.data.data.map((item, index) => {
                    return (
                        <div key={index}  >
                            <Container className={style.box}>
                                <Row>
                                    <div >
                                        <div className={style.box2}>
                                            <div className={style.Posisi}>
                                                {/* <FiIcons.FiUser size={20} className={style.space} /> */}
                                                <h5>Title: {item ? item.ThreadTitle : null}</h5>
                                            </div>
                                            <div className={style.butPosisi}>

                                                {/* <button className={style.buttonDel} onClick={() => handleUpdate(item.ID)}>Hapus User</button> */}
                                            </div>
                                        </div >
                                        <div>
                                            <h6>Message : {item ? item.Text : null}</h6>
                                        </div>
                                    </div>
                                </Row >
                            </Container >
                            <div className={style.box2}>
                                <button className={style.buttonDel} onClick={() => handleDelete(item.ID)}>Delete</button>
                                <h6 className={style.text2}>{item ? item.CategoryName : null}</h6>
                            </div>

                        </div >
                    )
                })
            }

        </div >
    );
}
