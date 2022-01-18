import React from 'react'
import style from "./LoginContent.module.css"
import gambar from "../../img/logoDiskusiin.png"
import { useState } from 'react'
import { Image, Form, Col, Row, Button, InputGroup } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function LoginContent() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
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
                                    className={style.input}
                                    required
                                    type="Email"
                                    placeholder="Username"
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
                                    className={style.input}
                                    required
                                    type="password"
                                    placeholder="Password"
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
                                <Button type="submit" size="lg" className={style.butLog}>
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
