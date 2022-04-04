import React, {ReactElement, useEffect, useState} from 'react';
import Layout from "../../layout";
import {AnimatePresence, motion} from "framer-motion";
import {fadeIn, fadeUp, rightIn} from "../../motion";


import 'react-bootstrap-accordion/dist/index.css';
import { Accordion } from 'react-bootstrap-accordion';




const Profile = () => {

    const [state, setState] = useState({
        arr: [
            {
                id: 1,
                image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
                name: 'Зубчатая деталь',
                param1: 'параметр 1',
                param2: 'параметр 2'
            },
            {
                id: 2,
                image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
                name: 'Зубчатая деталь',
                param1: 'параметр 1',
                param2: 'параметр 2'
            },
            {
                id: 3,
                image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
                name: 'Зубчатая деталь',
                param1: 'параметр 1',
                param2: 'параметр 2'
            },
            {
                id: 4,
                image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
                name: 'Зубчатая деталь',
                param1: 'параметр 1',
                param2: 'параметр 2'
            },
            {
                id: 5,
                image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
                name: 'Зубчатая деталь',
                param1: 'параметр 1',
                param2: 'параметр 2'
            },
            {
                id: 6,
                image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
                name: 'Зубчатая деталь',
                param1: 'параметр 1',
                param2: 'параметр 2'
            },
            {
                id: 7,
                image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
                name: 'Зубчатая деталь',
                param1: 'параметр 1',
                param2: 'параметр 2'
            },
            {
                id: 8,
                image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
                name: 'Зубчатая деталь',
                param1: 'параметр 1',
                param2: 'параметр 2'
            },
            {
                id: 9,
                image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
                name: 'Зубчатая деталь',
                param1: 'параметр 1',
                param2: 'параметр 2'
            },
            {
                id: 10,
                image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
                name: 'Зубчатая деталь',
                param1: 'параметр 1',
                param2: 'параметр 2'
            }
        ]
    });

    const [s, setS] = useState(false)

    const handleDelete = (index: number) => {
        setState(state => ({
            ...state,
            arr: state.arr.filter((item, i) => item.id !== index)
        }))
    }

    useEffect(() => {setS(true)})


    return (
        <div className={`profile`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <div className={`card`}>
                        <div className={`row gx-5 align-items-center`}>
                            <div className={`col-auto`}>
                                <div className={`profile-avatar`}>
                                    <img
                                        src="https://yt3.ggpht.com/ytc/AKedOLS2SF7GWShAo24fNcUgHqyYBc4dCqaqikWch8gQiw=s900-c-k-c0x00ffffff-no-rj"
                                        alt=""/>
                                </div>
                            </div>
                            <div className={`col`}>
                                <div className={`profile-name`}>
                                    Apple Company
                                </div>
                                <div className={`mt-2`}>
                                    <div className={'profile-subtitle'}>
                                        Адрес
                                    </div>
                                    <div className={`profile-text`}>
                                        One Apple Park Way Cupertino, CA 95014 United States
                                    </div>
                                </div>
                                <div className={`mt-2`}>
                                    <div className={'profile-subtitle'}>
                                        Контакты
                                    </div>
                                    <div className={`profile-text`}>
                                        8–800–333–51–73
                                    </div>
                                </div>
                                <div className={`mt-4`}>
                                    <button className={`btn rounded-pill btn-primary`}>
                                        Редактировать профиль
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-12 mt-4`}>
                    <div className={`row`}>
                        <div className={`col-3`}>
                            <div className={`card`}>
                                <div className={`profile-text mb-3`}>
                                    Фильтрация
                                </div>
                                <div>
                                    {
                                        s && (
                                            <>
                                                <Accordion title="ТехПроцесс">
                                                    This one shown by adding
                                                </Accordion>
                                                <Accordion title="Услуга">
                                                    This one shown by adding
                                                </Accordion>
                                                <Accordion title="Продукция">
                                                    This one shown by adding
                                                </Accordion>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`col-9`}>
                            <div className={`card`}>
                                <div className={`d-flex align-items-center justify-content-between`}>
                                    <div className={`profile-text mb-3`}>
                                        Текущие предложения
                                    </div>
                                    <button className={`btn btn-sm btn-outline-info rounded-pill`}>
                                        Добавить
                                    </button>
                                </div>
                                <div className={`table`}>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Наименование</th>
                                            <th>Параметр #1</th>
                                            <th>Параметр #2</th>
                                            <th/>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            state.arr.map((item, index) => (
                                                <motion.tr
                                                    variants={fadeIn}
                                                    custom={index}
                                                    initial={`initial`}
                                                    animate={`animate`}
                                                    exit={`initial`}
                                                    key={index}>
                                                    <td>{item.id}</td>
                                                    <td>
                                                       <div className={`d-flex align-items-center`}>
                                                           <span className={`img me-3`}>
                                                               <img src={item.image} alt=""/>
                                                           </span>
                                                           {item.name}
                                                       </div>
                                                    </td>
                                                    <td>{item.param1}</td>
                                                    <td>{item.param2}</td>
                                                    <td style={{'width' : '200px'}}>
                                                        <div className={`d-flex align-items-center`}>
                                                            <button className={`btn btn-sm btn-outline-primary rounded-pill me-2`}>
                                                                Изменить
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(item.id)}
                                                                className={`btn btn-sm btn-outline-danger rounded-pill`}>
                                                                Удалить
                                                            </button>
                                                        </div>
                                                    </td>
                                                </motion.tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

Profile.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {
                page
            }
        </Layout>
    )
}


// <div className={`col-3`}>
//     <div className={`card`}>
//         <div className={`info-block`}>
//             <div className={`profile-avatar mx-auto`}>
//                 <img src="https://yt3.ggpht.com/ytc/AKedOLS2SF7GWShAo24fNcUgHqyYBc4dCqaqikWch8gQiw=s900-c-k-c0x00ffffff-no-rj" alt=""/>
//             </div>
//             <h3 className={`mt-3 profile-name`}>
//                 Apple Company
//             </h3>
//             <div className={`mt-4`}>
//                 <div className={'profile-subtitle'}>
//                     Адрес
//                 </div>
//                 <div className={`profile-text`}>
//                     One Apple Park Way<br/>
//                     Cupertino, CA 95014<br/>
//                     United States
//                 </div>
//             </div>
//             <div className={`mt-3`}>
//                 <div className={'profile-subtitle'}>
//                     Контакты
//                 </div>
//                 <div className={`profile-text`}>
//                     8–800–333–51–73
//                 </div>
//             </div>
//             <div className={`mt-5`}>
//                 <div className={`d-flex justify-content-center`}>
//                     <button className={`btn rounded-pill btn-primary`}>
//                         Изменить
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
export default Profile;