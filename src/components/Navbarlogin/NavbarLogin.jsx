import React, { useState } from 'react'
import { InputGroup, DropdownButton, Dropdown, FormControl, Image } from 'react-bootstrap';
import style from './NavbarLogin.module.css'
// import { Container, Navbar, Nav, NavDropdown, Image, Button, ImageDropdown, Dropdown } from 'react-bootstrap'
// import gambar from "../../img/profile.png"
// import gambar2 from "../../img/settings.png"
// import { ImOffice } from "react-icons/im";

import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gambar from "../../img/logoDiskusiin.png"
import { useDispatch } from 'react-redux';

import { setToken } from '../../redux/slice';

export default function NavbarLogin() {
    const [isDown, setIsDown] = useState(false);
    const setDown = () => {
        setIsDown(!isDown)
    }

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        dispatch(setToken(""));
    }

    return (
        <div>
            <div className={style.navbar}>
                <div className={style.content}>
                    <div className={style.logo}>
                        <Link to={`/HomeLogin`}><Image src={gambar} width="60px" /></Link>
                    </div>
                    <div className={style.middle}>
                    </div>
                    {/* <div className={style.bar}>
                        <FaIcons.FaBars size={25} onClick={setDown} />
                    </div> */}
                    <div className={style.right}>
                        <div>
                            <FiIcons.FiBell size={20} />
                        </div>
                        <div>
                            <DropdownButton
                                className={style.down}
                                variant="light"
                                title={<FiIcons.FiSettings size={20} />}

                            >
                                {/* <Dropdown.Item href="#">Settings</Dropdown.Item>
                                <Dropdown.Item href="#">testing</Dropdown.Item>
                                <Dropdown.Divider /> */}
                                <Dropdown.Item onClick={handleSubmit}>Logout</Dropdown.Item>
                            </DropdownButton>

                        </div>
                        <div className={style.profile}>
                            <Link to={``}><FiIcons.FiUser size={20} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isDown ? style.dropdownActive : style.dropdown} >
            </div>
        </div >
    )
}
