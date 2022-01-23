import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LoginContent from '../../components/LoginContent/LoginContent'
import NavbarHome from '../../components/NavbarHome/NavbarHome'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

export default function HomeLogin() {
    const token = useSelector((state) => state.dataUser.token)
    let history = useNavigate();


    useEffect(() => {
        if (token == "") {
            history("/Login");
            console.log("ini kosong");
        }
    }, [token])
    return (
        <div>
            <NavbarHome />
            <Container >
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <LoginContent />
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </div>
    )
}
