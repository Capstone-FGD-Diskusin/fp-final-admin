import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import style from "./UserContent.module.css"
import { UserContentData } from './UserContentData'
import * as FiIcons from 'react-icons/fi';
import { useState } from 'react'



export default function UserContent() {

    const [Data, setData] = useState(UserContentData)

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
                    UserContentData.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={style.box}>
                                    <div className={style.Posisi}>
                                        <FiIcons.FiUser size={20} className={style.space} />
                                        <h6>{item.username}</h6>
                                    </div>
                                    <div className={style.butPosisi}>
                                        <Button className={style.buttonDel} onClick={() => handleDelete(index)}>Hapus User</Button>
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
