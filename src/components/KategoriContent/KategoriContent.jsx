import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import style from "./KategoriContent.module.css"
import { KategoriData } from './KategoriData'
import * as FiIcons from 'react-icons/fi';
import { useState } from 'react'
import gambar from "../../img/adminKategori.png"


export default function KategoriContent() {
    return (
        <div>
            <Container>
                <h6 className={style.text}>Hasil</h6>
                {
                    KategoriData.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={style.box}>
                                    <div className={style.Posisi}>
                                        {/* <FiIcons.FiUser size={20} className={style.space} /> */}
                                        <Image src={gambar} width="20px" className={style.img} />
                                        <h6>{item.Kategori}</h6>
                                    </div>
                                    <div className={style.butPosisi}>
                                        {/* <Button className={style.buttonDel} onClick={() => handleDelete(index)}>Hapus</Button> */}
                                        {/* <Button className={style.buttonDel} >Hapus</Button> */}
                                        <input type="submit" className={style.delete} value="Hapus" />
                                        {/* <h6>Hapus</h6> 
                                        <h6>Posis</h6> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
