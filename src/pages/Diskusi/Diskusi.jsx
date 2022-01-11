import React from 'react'
import NavbarLogin from '../../components/Navbarlogin/NavbarLogin'
import { Container, Row, Col } from 'react-bootstrap'
import AdminContent from '../../components/AdminContent/AdminContent'
import SearchContent from '../../components/SearchContent/SearchContent'
import DiskusiContent from '../../components/DiskusiContent/DiskusiContent'

export default function Diskusi() {
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
                        <Row>
                            <Col sm={1}></Col>
                            <Col sm={10}>
                                <DiskusiContent />
                            </Col>
                            <Col sm={1}></Col>
                        </Row>
                    </Col>
                    <Col sm={3}>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
