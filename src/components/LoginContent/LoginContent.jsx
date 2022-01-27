import React from 'react'
import style from "./LoginContent.module.css"
import gambar from "../../img/logoDiskusiin.png"
import { useState } from 'react'
import { Image, Form, Col, Row, Button, InputGroup } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import swal from 'sweetalert';

import { setToken } from '../../redux/slice';

export default function LoginContent() {

    const dataLogin = {
        username: "",
        password: "",
    };

    const [validated, setValidated] = useState(false);
    let history = useNavigate();
    const [data, setData] = useState(dataLogin)

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
        console.log(data.username);
        console.log(data.password);
    }

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        // setValidated(true);

        console.log(data);
        let isTrue = false;
        const URL = `http://34.101.171.217:1234/user/login`
        e.preventDefault()
        await Axios.post(URL,
            {
                email: data.username,
                password: data.password,
            })
            .then(res => {
                console.log(res);
                console.log(res.data.token);
                dispatch(setToken(res.data.token));
                if (res.data.token) {
                    console.log("berhasil")
                    isTrue = true;
                }
            }).catch(error => {
                // this.setError()
                console.log(error)
                if (error.response) {
                    // console.log("--------------------------------------------------")
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
            history("/HomeLogin");
            swal({
                title: "Success",
                text: "Login Berhasil",
                icon: "success",
            });
        } else {
            return swal({
                title: "Error",
                text: "Password atau Email salah",
                icon: "error",
            });
            // e.preventDefault();
        }
    };
    return (
        <div className={style.space}>
            <div>
                <h1 className={style.text}>Login Admin</h1>
                <h1 className={style.posisi}><Image src={gambar} className={style.img} /></h1>

            </div>
            <div className={style.posisi2}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label className={style.text4}>Email</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    className={style.input}
                                    required
                                    type="Email"
                                    placeholder="Username"
                                    name="username"
                                    value={data.username}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col sm={4}></Col>

                    </Row>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <Form.Group as={Col} controlId="validationCustom02">
                                <Form.Label className={style.text4}>Password</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    className={style.input}
                                    required
                                    type="password"
                                    placeholder="Password"
                                    value={data.password}
                                    name="password"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                    <Row>

                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <h6 className={style.text2}><Link to={``} className={style.Link}>Forgot Password</Link></h6>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    className={style.text4}
                                    label="Remember Me"
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button type="submit" size="lg" className={style.butLog} onSubmit={handleSubmit}>
                                    <h6 className={style.text3}>Login</h6>
                                </Button>
                            </div>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Form>
            </div>
        </div >
    )
}
