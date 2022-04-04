import React from 'react';
import Link from 'next/link'


const Layout: React.FC = ({children}) => {
    return (
        <>
            <div className={`section d-flex flex-column`}>
                <nav className={`nav`}>
                    <div className={`container-fluid`}>
                        <div className={`d-flex align-items-center justify-content-between`}>
                            <a href="#" className={`logo`}>
                                <img src="/logo.jpg" alt=""/>
                            </a>
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
                            </ul>
                            <ul className={`d-flex align-items-center`}>
                                <li><a className={`nav-link`} href="#">Брянск</a></li>
                                <li>
                                    <button type={`button`} className={`btn btn-outline-info btn-sm rounded-pill`}>
                                        Войти
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={`main mt-5 pb-5`}>
                    <div className={`container`}>
                        {
                            children
                        }
                    </div>
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