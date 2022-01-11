import React from 'react'
import { Col, Container, Image, Row, Form, Button, InputGroup } from 'react-bootstrap'
import style from "./KategoriInput.module.css"
import gambar from "../../img/adminKategori.png"

export default function KategoriInput() {

    return (
        <div className={style.space}>
            <Container>
                <Row>
                    <Col>
                        <h6>Tambah Kategori</h6>
                        <Form>
                            <div className={style.box}>
                                <Image src={gambar} width="30px" className={style.img} />
                                <Form.Control type="text" className={style.inputKat} />
                                <input type="submit" className={style.subKat} value="Tambah" />
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
