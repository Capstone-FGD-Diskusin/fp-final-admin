import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import style from "./KategoriContent.module.css"
import { KategoriData } from './KategoriData'
import * as FiIcons from 'react-icons/fi';
import { useState } from 'react'
import gambar from "../../img/adminKategori.png"
import GetAllCategory from '../Hooks/GET/GetAllCategory';


export default function KategoriContent(props) {
    const [Data, setData] = useState(KategoriData)
    const stateGetAllCategory = GetAllCategory(props)

    console.log("ini stategetall", stateGetAllCategory);
    const handleDelete = (event) => {
        // event.preventDefault();
        console.log("ini index", event);

        const newData = Data.filter((e, i) => {
            if (i !== event) {
                return e

            }
            console.log("ini di dalem");
        })

        console.log("ini new data", newData);
        console.log("ini data", Data);
        setData(newData)
    }
    return (
        <div>
            <Container>
                <h6 className={style.text}>Hasil</h6>
                {
                    stateGetAllCategory?.data.data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={style.box}>
                                    <div className={style.Posisi}>
                                        {/* <FiIcons.FiUser size={20} className={style.space} /> */}
                                        <Image src={gambar} width="20px" className={style.img} />
                                        <h6>{stateGetAllCategory ? item.Name : null}</h6>
                                    </div>
                                    <div className={style.butPosisi}>
                                        {/* <Button className={style.buttonDel} onClick={() => handleDelete(index)}>Hapus</Button> */}
                                        {/* <Button className={style.buttonDel} >Hapus</Button> */}
                                        {/* <input type="submit" className={style.delete} value="Hapus" /> */}
                                        {/* <h6>Hapus</h6> 
                                        <h6>Posis</h6> */}

                                        <button type="submit" className={style.delete} onClick={() => handleDelete(index)}>Hapus</button>
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
