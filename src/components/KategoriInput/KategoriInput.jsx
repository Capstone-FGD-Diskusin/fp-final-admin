import React, { useState } from 'react'
import { Col, Container, Image, Row, Form, Button, InputGroup } from 'react-bootstrap'
import style from "./KategoriInput.module.css"
import gambar from "../../img/adminKategori.png"
import { KategoriData } from '../KategoriContent/KategoriData'

export default function KategoriInput() {


    const [Data, setKategori] = useState(KategoriData)
    // const [form, setForm] = useState({
    //     todo: '',
    //     status: false
    // })
    const handleChange = (event) => {
        setKategori({ ...Data, [event.target.name]: event.target.value });
        console.log("ini name", event.target.name);
        console.log("ini value", event.target.value);

    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(Data);
    }
    // resetInput()


    return (
        <div className={style.space}>
            <Container>
                <Row>
                    <Col>
                        <h6>Tambah Kategori</h6>
                        <Form onSubmit={handleSubmit}>
                            <div className={style.box}>
                                <Image src={gambar} width="30px" className={style.img} />
                                <Form.Control
                                    type="text"
                                    className={style.inputKat}
                                    name="kategori"
                                    value={Data.Kategori}
                                    onChange={handleChange}
                                />
                                {/* <input type="submit" className={style.subKat} value="Tambah" /> */}
                                <button type="submit" className={style.subKat}>Tambah</button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
