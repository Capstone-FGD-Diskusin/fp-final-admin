import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LoginContent from '../../components/LoginContent/LoginContent'
import NavbarHome from '../../components/NavbarHome/NavbarHome'

export default function HomeLogin() {
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
