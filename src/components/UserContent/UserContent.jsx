import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import style from "./UserContent.module.css"
import { UserContentData } from './UserContentData'
import * as FiIcons from 'react-icons/fi';
import { useState } from 'react'
import GetAllUser from '../Hooks/GET/GetAllUser';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import swal from 'sweetalert';




export default function UserContent(props) {
    const { state, getData } = GetAllUser(props)
    // console.log(state.data.data);
    let history = useNavigate();
    // const [Data, setData] = useState(UserContentData)

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
        console.log(index);
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

    const handleUpdate = () => {

    }

    return (
        // <></>
        <div>
            <Container>
                <h6 className={style.text}>Hasil</h6>
                <Row>
                    {
                        state?.data.data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={style.box}>
                                        <div className={style.Posisi}>
                                            <FiIcons.FiUser size={20} className={style.space} />
                                            <h6>{item ? item.Username : null}</h6>
                                        </div>
                                        <div className={style.butPosisi}>
                                            <button className={style.buttonDel} onClick={() => handleDelete(item.ID)}>Update</button>
                                            <button className={style.buttonDel} onClick={() => handleUpdate(item.ID)}>Hapus User</button>
                                            {/* <h6>Hapus</h6> 
                                        <h6>Posis</h6> */}
                                        </div>
                                    </div >
                                </div >
                            )
                        })
                    }
                </Row >
                <Col>
                </Col>
            </Container >
        </div >
    )
}
