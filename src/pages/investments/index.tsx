import React, {ReactElement} from 'react';
import Layout from "../../layout";
import {motion} from "framer-motion";
import {fadeUp} from "../../motion";
import InvestmentCard from "../../components/InvestmentCard";


const state = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        img: '/img.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
        phone: '+ 7 (999) 99-99-999',
        man: 'Иванов Иван Иванович',
        auth: 'Максимов Сергей Алексеевич'
    },
]

const Investments = () => {
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
                            Автор проекта | Идея проекта | Телефон для связи | Контактное лицо
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