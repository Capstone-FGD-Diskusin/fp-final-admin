import React from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap'
import style from "./DiskusiContent.module.css"
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import { DiskusiData } from './DiskusiData'
import GetAllThread from '../Hooks/GET/GetAllThread';
import gambar2 from "../../img/love.png"
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import swal from 'sweetalert';

export default function DiskusiContent(props) {
    let history = useNavigate();
    const { state, getData } = GetAllThread(props)
    console.log("ini all thread", state ? state : null);

    // const handleDelete = (index) => {
    //     const URL = `http://localhost:1234/thread/` + index + ``
    //     Axios.delete(URL
    //     )
    //         .then(res => {
    //             getData()
    //             // console.log("ini get data");
    //         })
    //         .catch(error => {
    //             // this.setError()
    //             console.log(error)
    //             if (error.response) {
    //                 console.log("--------------------------------------------------")
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 console.log(error.response.data);
    //                 console.log(error.response.status);
    //                 if (error.response.status === 401) {
    //                     history("/Login");
    //                     swal({
    //                         title: "Error",
    //                         text: "Mohon Login Terlebih Dahulu",
    //                         icon: "error",
    //                     });
    //                 }
    //                 console.log(error.response.headers);
    //             } else if (error.request) {
    //                 console.log("*************************")

    //                 // The request was made but no response was received
    //                 // error.request is an instance of XMLHttpRequest in the browser and an instance of
    //                 // http.ClientRequest in node.js
    //                 console.log(error.request);
    //             } else {
    //                 console.log("++++++++++++++++++++++++")
    //                 // Something happened in setting up the request that triggered an Error
    //                 console.log('Error', error.message);
    //             }
    //             console.log(error.config);
    //         })
    // }

    return (
        <div>
            <h5 className={style.text}>Hasil</h5>
            {
                state?.data.data.map((item, index) => {
                    return (
                        <div key={index}>
                            <Container>
                                <Row>
                                    <Col>
                                        <div className={style.label}>
                                            <FiIcons.FiUser size={25} />
                                            <h5>{item ? item.UserName : null}</h5>
                                            <button className={style.edit}>
                                                <h6 className={style.text2}>Edit</h6>
                                            </button>
                                            <button
                                                className={style.Hapus}
                                            // onClick={() => handleDelete(item.ID)}
                                            >
                                                <h6 className={style.text2}>Hapus</h6>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                                <div className={style.box}>
                                    <Row>
                                        <Col sm={1}></Col>
                                        <Col sm={10}>
                                            <h6 className={style.text4}>{item ? item.Title : null}</h6>
                                            <h6 className={style.text4}>{item ? item.ImgUrl : null}</h6>
                                            <h6 className={style.text3}>{item ? item.Description : null}</h6>
                                        </Col>
                                        <Col sm={1}></Col>
                                    </Row>
                                </div>
                                <Row >
                                    <Col className={style.bag}>
                                        <div className={style.det}>

                                            <Image src={gambar2} width="20px" height="20px" />
                                            <h6 className={style.space8}>
                                                {item ? item.Like : null}
                                            </h6>
                                            {/* <Link to={`/Login/HomeLogin/${item.ID}/Comment`} className={style.space9}> */}
                                            <div className={style.space9}>
                                                <BiIcons.BiCommentDetail size={20} className={style.space10} />
                                            </div>

                                            {/* </Link> */}
                                            <h6 className={style.space8}>
                                                {item ? item.JumlahComment : null}
                                            </h6>
                                            <FiIcons.FiShare2 className={style.space11} />

                                        </div>
                                        {/* <Link to={`/Login/HomeLogin/${item.Kategori}`} */}
                                        {/* className={style.text5}> */}
                                        <h6 className={style.text5}>{item.CategoryName}</h6>
                                        {/* </Link> */}
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )
                })
            }

        </div >
    )
}
