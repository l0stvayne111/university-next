import React, {ReactElement} from 'react';
import Layout from "../../layout";
import {motion} from "framer-motion";
import {fadeIn, fadeUp, rightIn} from "../../motion";
import Link from "next/link";

const Registration = () => {
    return (
        <>
            <div className={`header`}>
                <div className={`row justify-content-center`}>
                    <div className="col-8 d-flex flex-column align-items-center">
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            initial={`initial`}
                            animate={`animate`}
                        >
                            Регистрация поставщика
                        </motion.h1>
                        <motion.p
                            variants={fadeIn}
                            custom={2}
                            initial={`initial`}
                            animate={`animate`}
                            className={`mt-5 mb-4`}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur, cum
                            cumque error
                            fugit maxime nemo nulla provident.
                        </motion.p>
                    </div>

                </div>
            </div>
            <div className={`form pb-5 mt-4`}>
                <div className={`container-min`}>
                    <form>
                        <div className={`row justify-content-between`}>
                            <motion.div
                                variants={rightIn}
                                custom={1}
                                initial={`initial`}
                                animate={`animate`}
                                className={`col-12`}>
                                <span className={`form-label`}>Имя</span>
                                <input type="text" placeholder={`Введите имя`} className={`form-control`}/>
                            </motion.div>
                            <motion.div
                                variants={rightIn}
                                custom={3}
                                initial={`initial`}
                                animate={`animate`}
                                className={`col-12 mt-3`}>
                                <span className={`form-label`}>Фамилия</span>
                                <input type="text" placeholder={`Введите фамилию`} className={`form-control`}/>
                            </motion.div>
                            <motion.div
                                variants={rightIn}
                                custom={4}
                                initial={`initial`}
                                animate={`animate`}
                                className={`col-12 mt-3`}>
                                <span className={`form-label`}>Телефон</span>
                                <input type="text" placeholder={`Введите телефон`} className={`form-control`}/>
                            </motion.div>
                            <motion.div
                                variants={rightIn}
                                custom={5}
                                initial={`initial`}
                                animate={`animate`}
                                className={`col-12 mt-3`}>
                                <span className={`form-label`}>Имя</span>
                                <input type="text" placeholder={`Введите имя`} className={`form-control`}/>
                            </motion.div>
                            <motion.div
                                variants={rightIn}
                                custom={6}
                                initial={`initial`}
                                animate={`animate`}
                                className={`col-12 mt-3`}>
                                <span className={`form-label`}>Email</span>
                                <input type="text" placeholder={`Введите email`} className={`form-control`}/>
                            </motion.div>
                            <motion.div
                                variants={rightIn}
                                custom={7}
                                initial={`initial`}
                                animate={`animate`}
                                className={`col-12 mt-3`}>
                                <span className={`form-label`}>Название компании</span>
                                <input type="text" placeholder={`Введите название`} className={`form-control`}/>
                            </motion.div>
                            <div
                                className={`col-auto mt-4`}>
                                <button className={`btn btn-danger rounded-pill`} type={`reset`}>
                                    Очистить
                                </button>
                            </div>
                            <div className={`col-auto mt-4`}>
                                <button className={`btn btn-success rounded-pill`} type={`submit`}>
                                    Отправить заявку
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

Registration.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {
                page
            }
        </Layout>
    )
}

export default Registration;