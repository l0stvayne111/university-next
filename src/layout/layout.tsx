import React, {useState} from 'react';
import Link from 'next/link'
import {AnimatePresence, motion} from "framer-motion";
import {fadeIn, fadeUp, rightIn} from "../motion"

const Layout: React.FC = ({children}) => {

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('Брянск')

    const handleClick = (event:any) => {
      setIsActive(false);
      setValue(event.target.textContent);
    }

    return (
        <>
            <div className={`section d-flex flex-column`}>
                <div className={`nav`}>
                    <div className={`container-fluid`}>
                        <div className={`d-flex align-items-center justify-content-between`}>
                            <Link href={`/home`}>
                                <a className={`logo`}>
                                    <img src="/IT.jpg" alt=""/>
                                </a>

                            </Link>
                            <Link href={`/home`}>
                                <a className={`logo`}>
                                    <img src="/logo.jpg" alt=""/>
                            </a>

                            </Link>
                            <ul className={`d-flex align-items-center`}>
                                <li>
                                    <Link href={`/home`}>
                                        <a className={`nav-link`}>Найти поставщика</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/supplier`}>
                                        <a className={`nav-link`}>Стать поставщиком</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/contacts`}>
                                        <a className={`nav-link`}>
                                            Банк контактов
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/news`}>
                                        <a className={`nav-link`}>
                                            Новости и мероприятия
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/investments`}>
                                        <a className={`nav-link`}>
                                            Инвестиционные предложения
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/profile`}>
                                        <a className={`nav-link`}>Профиль</a>
                                    </Link>
                                </li>
                            </ul>

                           <ul className={`d-flex align-items-center`}>
                                <li>
                                    <div className={`dropdown`}>
                                        <div
                                            onClick={() => setIsActive(!isActive)}
                                            className={`dropdown-btn`}>{value}</div>
                                        {
                                            isActive && (
                                                <motion.div
                                                    variants={fadeUp}
                                                    custom={2}
                                                    initial={`initial`}
                                                    animate={`animate`}
                                                    className={`dropdown-content`}>
                                                    <div
                                                        onClick={handleClick}
                                                        className={`dropdown-item`}>
                                                        Брянск
                                                    </div>
                                                    <div onClick={handleClick}
                                                         className={`dropdown-item`}>
                                                        Смоленск
                                                    </div>
                                                    <div onClick={handleClick} className={`dropdown-item`}>
                                                        Москва
                                                    </div>
                                                </motion.div>
                                            )
                                        }
                                    </div>
                                </li>
                                <li>
                                    <button type={`button`} className={`btn btn-outline-info btn-sm rounded-pill`}>
                                        Войти
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`main pb-5`}>
                    {
                        children
                    }


                </div>
                <footer className={`footer py-4`}>
                    <div className={`container`}>
                        Все права защищены 2022г.
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Layout;