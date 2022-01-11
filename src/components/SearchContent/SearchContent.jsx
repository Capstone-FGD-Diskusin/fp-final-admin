import React, { useState } from 'react'
import style from "./SearchContent.module.css"
import { Container, Form, Col, Row } from 'react-bootstrap'

export default function SearchContent() {

    const DataSearch = {
        search: "",
    }

    const [data, setData] = useState(DataSearch)

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    return (
        <div className={style.space}>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className={style.search}
                                onChange={handleChange}
                            />
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
