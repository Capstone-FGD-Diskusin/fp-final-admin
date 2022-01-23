import React from 'react'
import NavbarLogin from '../../components/Navbarlogin/NavbarLogin'
import { Container, Row, Col } from 'react-bootstrap'
import AdminContent from '../../components/AdminContent/AdminContent'
import SearchContent from '../../components/SearchContent/SearchContent'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

export default function LoginAdmin() {
    // const token = useSelector((state) => state.dataUser.token)
    // let history = useNavigate();


    // useEffect(() => {
    //     if (token == "") {
    //         history("/Login");
    //         console.log("ini kosong");
    //     }
    // }, [token])
    return (
        <div>
            <NavbarLogin />
            <Container>
                <Row>
                    <Col sm={3}>
                        <AdminContent />
                    </Col>
                    <Col sm={6}>
                        <SearchContent />
                    </Col>
                    <Col sm={3}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
