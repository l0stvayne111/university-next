import React, {ReactElement} from 'react';
import Layout from "../../layout";
import {motion} from "framer-motion";
import {fadeUp} from "../../motion";
import ContactCard from "../../components/ContactCard";

const state = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        address: 'Россия, г. Москва, ул. Тверская',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович'
    }
]

const Contacts = () => {
    return (
        <div className={`container mt-3`}>
            <div className={`header`}>
                <div className={`row justify-content-center`}>
                    <div className="col-8 d-flex flex-column align-items-center">
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            initial={`initial`}
                            animate={`animate`}
                        >
                            Название компании | Адрес | Телефон | Контактное лицо |
                        </motion.h1>


                    </div>
                </div>
            </div>
            <div className={`mt-5`}>
                <div className={`row`}>
                    {
                        state.map((item, index) => (
                            <motion.div
                                variants={fadeUp}
                                custom={index+5}
                                initial={`initial`}
                                viewport={{ once: true }}
                                whileInView={`animate`}
                                className={`col-6 mb-5`} key={index}>
                                <ContactCard state={item}/>
                            </motion.div>
                        ))
                    }
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