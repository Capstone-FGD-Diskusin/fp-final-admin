import React, { useState } from 'react'
import { InputGroup, DropdownButton, Dropdown, FormControl, Image } from 'react-bootstrap';
import style from './NavbarHome.module.css'
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gambar from "../../img/logoDiskusiin.png"

export default function NavbarHome() {
    const [isDown, setIsDown] = useState(false);
    const setDown = () => {
        setIsDown(!isDown)
    }

    return (
        <div>
            <div className={style.navbar}>
                <div className={style.content}>
                    <div className={style.logo}>
                        ADMIN
                    </div>
                    <div className={style.middle}>
                    </div>
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
