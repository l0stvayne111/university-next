import React, {ReactElement} from 'react';
import Layout from "../../layout";
import {motion} from "framer-motion";
import {fadeUp} from "../../motion";
import NewsCard from '../../components/NewsCard';

const state: Array<Array<any>> = [
    [
        {
            id: 1,
            img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
            date: 'Oct 21, 2021',
        },
        {
            id: 2,
            img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
            date: 'Oct 21, 2021',
        },
        {
            id: 3,
            img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
            date: 'Oct 21, 2021',
        },
    ],
    [
        {
            id: 1,
            img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
            date: 'Oct 21, 2021',
        },
        {
            id: 2,
            img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
            date: 'Oct 21, 2021',
        },
        {
            id: 3,
            img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
            date: 'Oct 21, 2021',
        },
    ],
    [
        {
            id: 1,
            img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
            date: 'Oct 21, 2021',
        },
        {
            id: 2,
            img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
            date: 'Oct 21, 2021',
        },
        {
            id: 3,
            img: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias aliquam autem culpa delectus, ea facere in itaque laudantium magnam molestiae mollitia necessitatibus nesciunt, placeat quae quaerat quo repellat reprehenderit saepe sapiente sed suscipit vel. Amet animi aperiam corporis, eius et harum illo in maxime nam, quam, ut voluptatibus!',
            date: 'Oct 21, 2021',
        },
    ],
]

const News = () => {
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
                            На этой странице будут новости и мероприятия!
                        </motion.h1>


                    </div>
                </div>
            </div>
            <div className={`mt-5`}>
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
                                                        <NewsCard state={item[1]} type={`ROW`}/>
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
                                                        <NewsCard state={item[2]} type={`ROW`}/>
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