import React, {ReactElement} from 'react';
import Layout from "../../layout";
import {motion} from "framer-motion";
import {fadeUp} from "../../motion";
import InvestmentCard from "../../components/InvestmentCard";


const state = [
    {
        id: 1,
        title: 'Оптимизация производства',
        img: 'https://rostec.ru/upload/iblock/4ce/y24ctvpxqeayt81sql0jyetb2115e13u.jpg',
        description: 'Повышение производительности производства.',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
    {
        id: 1,
        title: 'Разработка нового типа детали',
        img: 'https://www.metalinfo.ru/ru/news/133099.jpg',
        description: 'Разработка совершенно нового типа детали для повышения эффективности.',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
    {
        id: 1,
        title: 'Повышение оклада сотрудников за счет внедрения новой технологии',
        img: 'https://mplast.by/wp-content/uploads/2021/10/3dp-metallom-001.png',
        description: 'Повышение зарплат сотрудников за счет внедрения новой и более дешевой технологии для повышения эффективности.',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
    {
        id: 1,
        title: 'Оптимизация производства',
        img: 'https://rostec.ru/upload/iblock/4ce/y24ctvpxqeayt81sql0jyetb2115e13u.jpg',
        description: 'Повышение производительности производства.',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
    {
        id: 1,
        title: 'Разработка нового типа детали',
        img: 'https://www.metalinfo.ru/ru/news/133099.jpg',
        description: 'Разработка совершенно нового типа детали для повышения эффективности.',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
    {
        id: 1,
        title: 'Повышение оклада сотрудников за счет внедрения новой технологии',
        img: 'https://mplast.by/wp-content/uploads/2021/10/3dp-metallom-001.png',
        description: 'Повышение зарплат сотрудников за счет внедрения новой и более дешевой технологии для повышения эффективности.',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
    {
        id: 1,
        title: 'Оптимизация производства',
        img: 'https://rostec.ru/upload/iblock/4ce/y24ctvpxqeayt81sql0jyetb2115e13u.jpg',
        description: 'Повышение производительности производства.',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },



]

const Investments = () => {
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
                            ИИнвестиционные предложения
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
                                key={index} className={`col-6 mb-4`}>
                                <InvestmentCard state={item}/>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

Investments.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {
                page
            }
        </Layout>
    )
}

export default Investments;