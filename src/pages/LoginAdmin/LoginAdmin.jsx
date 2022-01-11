import React from 'react'
import NavbarLogin from '../../components/Navbarlogin/NavbarLogin'
import { Container, Row, Col } from 'react-bootstrap'
import AdminContent from '../../components/AdminContent/AdminContent'
import SearchContent from '../../components/SearchContent/SearchContent'

export default function LoginAdmin() {
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
