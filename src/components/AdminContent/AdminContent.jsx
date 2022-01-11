import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from "./AdminContent.module.css"
import { AdminData } from './AdminData'

export default function AdminContent() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h6 className={style.text}>ADMIN</h6>
                        <h6>
                            {
                                AdminData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <h6 ><Link className={style.link} to={`${item.Path}`}>{item.Admin}</Link> </h6>

                                        </div>
                                    )
                                }
                                )
                            }
                        </h6>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
