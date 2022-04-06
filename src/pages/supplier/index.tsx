import React, {ReactElement} from 'react';
import {motion} from "framer-motion";
import {fadeIn, fadeUp} from "../../motion";
import Layout from "../../layout";
import Link from 'next/link';

const Supplier = () => {
    return (
        <>
            <div className={`container`}>
                <div className={`header`}>
                    <div className={`row justify-content-center`}>
                        <div className="col-8 d-flex flex-column align-items-center">
                            <motion.h1
                                variants={fadeUp}
                                custom={1}
                                initial={`initial`}
                                animate={`animate`}
                            >
                                У вас есть производственные предложения?
                            </motion.h1>
                            <motion.p
                                variants={fadeIn}
                                custom={2}
                                initial={`initial`}
                                animate={`animate`}
                                className={`mt-5 mb-4`}
                            >
                                Зарегистрируйтесь или водите в Профиль чтобы добавить предложение
                            </motion.p>
                            <div className={`d-flex align-items-center justify-content-center`}>
                                <Link href={`/auth/registration`}>
                                    <a className={`btn btn-primary`}>
                                        Регистрация
                                    </a>
                                </Link>
                                <Link href={`/profile`}>
                                    <a className={`btn btn-primary mx-3`}>
                                         Войти в профиль
                                    </a>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

Supplier.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {
                page
            }
        </Layout>
    )
}

export default Supplier;