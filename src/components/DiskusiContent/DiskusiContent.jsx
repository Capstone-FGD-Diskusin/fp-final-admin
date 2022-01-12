import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import style from "./DiskusiContent.module.css"
import * as FiIcons from 'react-icons/fi';
import { DiskusiData } from './DiskusiData'

export default function DiskusiContent() {
    return (
        <div>
            <h5 className={style.text}>Hasil</h5>
            {
                DiskusiData.map((item, index) => {
                    return (
                        <div key={index}>
                            <Container>
                                <Row>
                                    <Col>
                                        <div className={style.label}>
                                            <FiIcons.FiUser size={25} />
                                            <h5>{item.User}</h5>
                                            <button className={style.edit}><h6 className={style.text2}>Edit</h6></button>
                                            <button className={style.Hapus}><h6 className={style.text2}>Hapus</h6></button>
                                        </div>
                                    </Col>
                                </Row>
                                <div className={style.box}>
                                    <Row>
                                        <Col sm={1}></Col>
                                        <Col sm={10}>
                                            <h6 className={style.text3}>{item.Thread}</h6>
                                        </Col>
                                        <Col sm={1}></Col>
                                    </Row>
                                </div>
                            </Container>
                        </div>
                    )
                })
            }

        </div >
    )
}
