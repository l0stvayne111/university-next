import React, {FormEvent, useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {fadeIn, fadeUp} from '../motion';
import Layout from "../layout";
import type {ReactElement} from 'react'
import {useRouter} from "next/router";

const Home = () => {

    const [isFilter, setIsFilter] = useState(0);

    const router = useRouter();
    const [search, setSearch] = useState<string>('');
    const [isValid, setIsValid] = useState(false);


    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        router.push(`/suppliers/${search}`)
    }


    useEffect(() => {
        setIsValid(search.length > 0)
    }, [search])


    return (
        <>
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
                                <p>Кооперация 2.0</p> Сделано в России
                                {/*
                                Мы поможем вам найти партнеров
                                */}
                            </motion.h1> <h1></h1>
                        <br /><br /><br />

                        </div>
                    </div>
                </div>
                <motion.div
                    variants={fadeIn}
                    custom={5}
                    initial={`initial`}
                    animate={`animate`}
                    className={`search mt-4`}>
                    <div className={`container-small`}>
                        <form onSubmit={handleOnSubmit}>
                            <div className={`row gx-2 justify-content-center align-items-center`}>
                                <div className={`col`}>
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={event => setSearch(event.target.value)}
                                        className={`search-input`}
                                        placeholder={`Поиск`}
                                    />
                                </div>
                                <div className={`col-auto`}>
                                    <button
                                        disabled={!isValid}
                                        className={`btn btn-primary rounded-pill`}
                                        type={`submit`}
                                    >
                                        Найти поставщика
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </motion.div><br /><br />
                <div className={`filter-tabs mt-5`}>
                    <div className={`container-xxl`}>
                        <div className={`row align-items-center justify-content-center`}>
                            <motion.div
                                variants={fadeUp}
                                custom={3}
                                initial={`initial`}
                                animate={`animate`}
                                className="col-3"
                            >
                                <div
                                    onClick={() => setIsFilter(1)}
                                    className={`card ${isFilter === 1 && 'active'}`}>
                                    <h2>
                                        Техроцесс
                                    </h2>
                                    <p className={`mt-1`}>
                                        Фильтрация
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                custom={5}
                                initial={`initial`}
                                animate={`animate`}
                                className="col-3"
                            >
                                <div
                                    onClick={() => setIsFilter(2)}
                                    className={`card ${isFilter === 2 && 'active'}`}>
                                    <h2>
                                        Услуга
                                    </h2>
                                    <p className={`mt-1`}>
                                        Фильтрация
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                custom={7}
                                initial={`initial`}
                                animate={`animate`}
                                className="col-3"
                            >
                                <div
                                    onClick={() => setIsFilter(3)}
                                    className={`card ${isFilter === 3 && 'active'}`}>
                                    <h2>
                                        Продукция
                                    </h2>
                                    <p className={`mt-1`}>
                                        Фильтрация
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className={`filter mt-5`}>
                    <div className={`container-small`}>
                        {
                            isFilter === 1 && (
                                <div className={`row justify-content-center`}>
                                    <div className="col-4">
                                        <motion.select
                                            variants={fadeUp}
                                            custom={2}
                                            initial={`initial`}
                                            animate={`animate`}
                                            className={`form-select`}>
                                            <option selected>Тип</option>
                                            <option value="1">Механическая обработка</option>
                                            <option value="2">Литье</option>
                                            <option value="3">Нанесение гальванических покрытий</option>
                                        </motion.select>
                                    </div>
                                    <div className="col-4">
                                        <motion.select
                                            variants={fadeUp}
                                            custom={4}
                                            initial={`initial`}
                                            animate={`animate`}
                                            className={`form-select`}>
                                            <option selected>Виды работ</option>
                                            <option value="1">Фрезерные работы</option>
                                            <option value="2">Токарные работы</option>
                                            <option value="3">Шлифование</option>
                                        </motion.select>
                                    </div>
                                    <div className="col-4">
                                        <motion.select
                                            variants={fadeUp}
                                            custom={6}
                                            initial={`initial`}
                                            animate={`animate`}
                                            className={`form-select`}>
                                            <option selected>Материал</option>
                                            <option value="1">Сталь</option>
                                            <option value="2">Чугун</option>
                                            <option value="3">Алюминий</option>
                                        </motion.select>
                                    </div>
                                </div>
                            )
                        }
                        {
                            isFilter === 2 && (
                                <div className={`row justify-content-center`}>
                                    <div className="col-4">
                                        <motion.select
                                            variants={fadeUp}
                                            custom={2}
                                            initial={`initial`}
                                            animate={`animate`}
                                            className={`form-select`}>
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </motion.select>
                                    </div>
                                    <div className="col-4">
                                        <motion.select
                                            variants={fadeUp}
                                            custom={4}
                                            initial={`initial`}
                                            animate={`animate`}
                                            className={`form-select`}>
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </motion.select>
                                    </div>
                                    <div className="col-4">
                                        <motion.select
                                            variants={fadeUp}
                                            custom={6}
                                            initial={`initial`}
                                            animate={`animate`}
                                            className={`form-select`}>
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </motion.select>
                                    </div>
                                </div>
                            )
                        }
                        {
                            isFilter === 3 && (
                                <div className={`row justify-content-center`}>
                                    <div className="col-4">
                                        <motion.select
                                            variants={fadeUp}
                                            custom={2}
                                            initial={`initial`}
                                            animate={`animate`}
                                            className={`form-select`}>
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </motion.select>
                                    </div>
                                    <div className="col-4">
                                        <motion.select
                                            variants={fadeUp}
                                            custom={4}
                                            initial={`initial`}
                                            animate={`animate`}
                                            className={`form-select`}>
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </motion.select>
                                    </div>
                                    <div className="col-4">
                                        <motion.select
                                            variants={fadeUp}
                                            custom={6}
                                            initial={`initial`}
                                            animate={`animate`}
                                            className={`form-select`}>
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </motion.select>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {
                page
            }
        </Layout>
    )
}

export default Home;