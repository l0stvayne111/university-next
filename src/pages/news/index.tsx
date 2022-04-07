import React, {ReactElement} from 'react';
import Layout from "../../layout";
import {motion} from "framer-motion";
import {fadeUp} from "../../motion";
import NewsCard from '../../components/NewsCard';

const state: Array<Array<any>> = [
    [
        {
            id: 1,
            img: 'https://rostec.ru/upload/iblock/4ce/y24ctvpxqeayt81sql0jyetb2115e13u.jpg',
            title: 'На московском предприятии ОДК модернизированы производственные мощности',
            description: 'В производственном комплексе «Салют» Объединенной двигателестроительной корпорации сформирован новый современный высокотехнологичный участок по изготовлению зубчатых колес. Оборудование позволит значительно сократить трудоемкость и временные затраты, а также рационализировать производственный цикл изготовления деталей.',
            date: 'Oct 21, 2021',
        },
        {
            id: 2,
            img: 'https://www.metalinfo.ru/ru/news/133099.jpg',
            title: 'Завод «Электрокабель» готов заместить выпуск 2 880 импортных изделий',
            description: 'АО «Электрокабель» Кольчугинский завод» в 2021 году получило заключение о подтверждении производства 2880 типов продукции на территории России, сообщает пресс-центр Холдинга Кабельный Альянс.\n' +
                'Для сотрудничества с государственными и муниципальными предприятиями продукция производителя должна быть включена в реестр Минпромторга РФ. Соответствующее заключение министерства и Торгово-промышленной палаты РФ получили 2880 наименований кабельно-проводниковой продукции АО «ЭКЗ».',
            date: 'Oct 21, 2021',
        },
        {
            id: 3,
            img: 'https://mplast.by/wp-content/uploads/2021/10/3dp-metallom-001.png',
            title: 'Ковка, штамповка и 3D-печать как способ изготовления деталей из металла',
            description: 'В 3D-печати металлом используются точные лазеры. 3D печать идеально подходит для экспериментов – изготовление деталей в небольших объемах. Из минусов, данный способ не так масштабируем, как многие другие процессы обработки металлов (например, литье, фрезеровка и др.). Поэтому его часто используют для изготовления прототипов, а также как заменитель мелкосерийного литья.',
            date: 'Oct 21, 2021',
        },
    ],
    [
        {
            id: 1,
            img: 'https://rostec.ru/upload/iblock/4ce/y24ctvpxqeayt81sql0jyetb2115e13u.jpg',
            title: 'На московском предприятии ОДК модернизированы производственные мощности',
            description: 'В производственном комплексе «Салют» Объединенной двигателестроительной корпорации сформирован новый современный высокотехнологичный участок по изготовлению зубчатых колес. Оборудование позволит значительно сократить трудоемкость и временные затраты, а также рационализировать производственный цикл изготовления деталей.',
            date: 'Oct 21, 2021',
        },
        {
            id: 2,
            img: 'https://www.metalinfo.ru/ru/news/133099.jpg',
            title: 'Завод «Электрокабель» готов заместить выпуск 2 880 импортных изделий',
            description: 'АО «Электрокабель» Кольчугинский завод» в 2021 году получило заключение о подтверждении производства 2880 типов продукции на территории России, сообщает пресс-центр Холдинга Кабельный Альянс.\n' +
                'Для сотрудничества с государственными и муниципальными предприятиями продукция производителя должна быть включена в реестр Минпромторга РФ. Соответствующее заключение министерства и Торгово-промышленной палаты РФ получили 2880 наименований кабельно-проводниковой продукции АО «ЭКЗ».',
            date: 'Oct 21, 2021',
        },
        {
            id: 3,
            img: 'https://mplast.by/wp-content/uploads/2021/10/3dp-metallom-001.png',
            title: 'Ковка, штамповка и 3D-печать как способ изготовления деталей из металла',
            description: 'В 3D-печати металлом используются точные лазеры. 3D печать идеально подходит для экспериментов – изготовление деталей в небольших объемах. Из минусов, данный способ не так масштабируем, как многие другие процессы обработки металлов (например, литье, фрезеровка и др.). Поэтому его часто используют для изготовления прототипов, а также как заменитель мелкосерийного литья.',
            date: 'Oct 21, 2021',
        },
    ],
    [
        {
            id: 1,
            img: 'https://rostec.ru/upload/iblock/4ce/y24ctvpxqeayt81sql0jyetb2115e13u.jpg',
            title: 'На московском предприятии ОДК модернизированы производственные мощности',
            description: 'В производственном комплексе «Салют» Объединенной двигателестроительной корпорации сформирован новый современный высокотехнологичный участок по изготовлению зубчатых колес. Оборудование позволит значительно сократить трудоемкость и временные затраты, а также рационализировать производственный цикл изготовления деталей.',
            date: 'Oct 21, 2021',
        },
        {
            id: 2,
            img: 'https://www.metalinfo.ru/ru/news/133099.jpg',
            title: 'Завод «Электрокабель» готов заместить выпуск 2 880 импортных изделий',
            description: 'АО «Электрокабель» Кольчугинский завод» в 2021 году получило заключение о подтверждении производства 2880 типов продукции на территории России, сообщает пресс-центр Холдинга Кабельный Альянс.\n' +
                'Для сотрудничества с государственными и муниципальными предприятиями продукция производителя должна быть включена в реестр Минпромторга РФ. Соответствующее заключение министерства и Торгово-промышленной палаты РФ получили 2880 наименований кабельно-проводниковой продукции АО «ЭКЗ».',
            date: 'Oct 21, 2021',
        },
        {
            id: 3,
            img: 'https://mplast.by/wp-content/uploads/2021/10/3dp-metallom-001.png',
            title: 'Ковка, штамповка и 3D-печать как способ изготовления деталей из металла',
            description: 'В 3D-печати металлом используются точные лазеры. 3D печать идеально подходит для экспериментов – изготовление деталей в небольших объемах. Из минусов, данный способ не так масштабируем, как многие другие процессы обработки металлов (например, литье, фрезеровка и др.). Поэтому его часто используют для изготовления прототипов, а также как заменитель мелкосерийного литья.',
            date: 'Oct 21, 2021',
        },
    ],
    [
        {
            id: 1,
            img: 'https://rostec.ru/upload/iblock/4ce/y24ctvpxqeayt81sql0jyetb2115e13u.jpg',
            title: 'На московском предприятии ОДК модернизированы производственные мощности',
            description: 'В производственном комплексе «Салют» Объединенной двигателестроительной корпорации сформирован новый современный высокотехнологичный участок по изготовлению зубчатых колес. Оборудование позволит значительно сократить трудоемкость и временные затраты, а также рационализировать производственный цикл изготовления деталей.',
            date: 'Oct 21, 2021',
        },
        {
            id: 2,
            img: 'https://www.metalinfo.ru/ru/news/133099.jpg',
            title: 'Завод «Электрокабель» готов заместить выпуск 2 880 импортных изделий',
            description: 'АО «Электрокабель» Кольчугинский завод» в 2021 году получило заключение о подтверждении производства 2880 типов продукции на территории России, сообщает пресс-центр Холдинга Кабельный Альянс.\n' +
                'Для сотрудничества с государственными и муниципальными предприятиями продукция производителя должна быть включена в реестр Минпромторга РФ. Соответствующее заключение министерства и Торгово-промышленной палаты РФ получили 2880 наименований кабельно-проводниковой продукции АО «ЭКЗ».',
            date: 'Oct 21, 2021',
        },
        {
            id: 3,
            img: 'https://mplast.by/wp-content/uploads/2021/10/3dp-metallom-001.png',
            title: 'Ковка, штамповка и 3D-печать как способ изготовления деталей из металла',
            description: 'В 3D-печати металлом используются точные лазеры. 3D печать идеально подходит для экспериментов – изготовление деталей в небольших объемах. Из минусов, данный способ не так масштабируем, как многие другие процессы обработки металлов (например, литье, фрезеровка и др.). Поэтому его часто используют для изготовления прототипов, а также как заменитель мелкосерийного литья.',
            date: 'Oct 21, 2021',
        },
    ],
]

const News = () => {
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
                            Новости и мероприятия
                        </motion.h1>


                    </div>
                </div>
            </div>
            <div className={`mt-5 py-4`}>
                {
                    state.map((item: Array<any>, index: number) => {
                        if (index % 2 === 0) {
                            return (
                                <div className={`row gx-5 news-items my-5`}>
                                    <>
                                        <motion.div
                                            variants={fadeUp}
                                            custom={5}
                                            initial={`initial`}
                                            whileInView={`animate`}
                                            viewport={{ once: true }}
                                            className={`col-5 mb-3`}>
                                            <NewsCard state={item[0]} type={`COLUMN`}/>
                                        </motion.div>
                                        <div className={`col-7 mb-3`}>
                                            {
                                                item[1] && (
                                                    <motion.div
                                                        variants={fadeUp}
                                                        custom={5 + 1}
                                                        initial={`initial`}
                                                        viewport={{ once: true }}
                                                        whileInView={`animate`}>
                                                        <NewsCard state={item[1]} type={`ROW`}/>
                                                    </motion.div>

                                                )
                                            }
                                            {
                                                item[2] && (
                                                    <motion.div
                                                        variants={fadeUp}
                                                        custom={5 + 2}
                                                        initial={`initial`}
                                                        viewport={{ once: true }}
                                                        whileInView={`animate`}>
                                                        <NewsCard state={item[2]} type={`ROW`}/>
                                                    </motion.div>
                                                )
                                            }
                                        </div>
                                    </>
                                </div>
                            )
                        } else {
                            return (
                                <div className={`row gx-5 news-items`}>
                                    <>
                                        <div className={`col-7 mb-3`}>
                                            {
                                                item[0] && (
                                                    <motion.div
                                                        variants={fadeUp}
                                                        custom={5 + 1}
                                                        viewport={{ once: true }}
                                                        initial={`initial`}
                                                        whileInView={`animate`}>
                                                        <NewsCard state={item[0]} type={`ROW`}/>
                                                    </motion.div>
                                                )
                                            }
                                            {
                                                item[1] && (
                                                    <motion.div
                                                        variants={fadeUp}
                                                        custom={5 + 2}
                                                        viewport={{ once: true }}
                                                        initial={`initial`}
                                                        whileInView={`animate`}>
                                                        <NewsCard state={item[1]} type={`ROW`}/>
                                                    </motion.div>
                                                )
                                            }
                                        </div>
                                        <motion.div
                                            variants={fadeUp}
                                            custom={5}
                                            initial={`initial`}
                                            viewport={{ once: true }}
                                            whileInView={`animate`}
                                            className={`col-5 mb-3`}>
                                            <NewsCard state={item[2]} type={`COLUMN`}/>
                                        </motion.div>

                                    </>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
};


News.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {
                page
            }
        </Layout>
    )
}

export default News;