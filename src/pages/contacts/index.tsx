import React, {ReactElement} from 'react';
import Layout from "../../layout";
import {motion} from "framer-motion";
import {fadeIn, fadeUp, rightIn} from "../../motion";
import ContactCard from "../../components/ContactCard";

const state = [
    {
        id: 1,
        title: 'REMPROMMASH',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 2,
        title: 'MODERN MECHANICS',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 3,
        title: 'Железнопроизвод',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 4,
        title: 'Деталь-изделие',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 5,
        title: 'Шестеренка',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 6,
        title: 'Стальной завод',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 7,
        title: 'Брянский завод деталей',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Брянск, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 8,
        title: 'Пронская Металлобаза',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 9,
        title: 'Московский стальной комбинат',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 10,
        title: 'Изделие',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 11,
        title: 'Зубчатая деталь',
        img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    }
]

const Contacts = () => {
    return (
        <div className={`container mt-5`}>
            <div className={`header`}>
                <div className={`row justify-content-center`}>
                    <div className="col-8 d-flex flex-column align-items-center">
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            initial={`initial`}
                            animate={`animate`}
                        >
                            Банк контактов
                        </motion.h1>


                    </div>
                </div>
            </div>
            <div className={`mt-5 py-4`}>
                <div className={`row`}>
                    <div className={`table contacts`}>
                        <table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Название</th>
                                <th>Адрес</th>
                                <th>Телефон</th>
                                <th>Контактное лицо</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                state.map((item: any, index: number) => (
                                    <motion.tr
                                        variants={fadeIn}
                                        custom={index}
                                        initial={`initial`}
                                        animate={`animate`}
                                        key={index}>
                                        <td>{item.id}</td>
                                        <td>
                                            <div className={`row`}>
                                                <div className={`col-auto`}>
                                                    <div className={`img`}>
                                                        <img src={item.img} alt=""/>
                                                    </div>
                                                </div>
                                                <div className={`col`}>
                                                    {item.title}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.address}
                                        </td>
                                        <td>
                                            <a href={`tel:${item.phone}`}>
                                                {item.phone}
                                            </a>
                                        </td>
                                        <td>
                                            {item.man}
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
    );
};

Contacts.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {
                page
            }
        </Layout>
    )
}

export default Contacts;