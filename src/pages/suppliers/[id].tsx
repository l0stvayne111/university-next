import {useRouter} from 'next/router';
import React, {FormEvent, ReactElement, useEffect, useState} from 'react';
import Layout from "../../layout";
import {fadeIn, fadeUp, rightIn} from "../../motion";
import {motion} from "framer-motion";
import Link from 'next/link';
import WoodCheckBox from "../../components/WoodCheckBox";


type ICard = {
    id: number,
    image: string,
    title: string,
    description: string,
    path: string,
    ul: Array<string>,
}

const store: Array<ICard> = [
    {
        id: 1,
        title: `Зубчатая деталь из титана`,
        image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        description: `ООО «Пронская Металлобаза» — динамично развивающаяся и высокотехнологичная производственная компания, которая поставляет качественный металлопрокат.`,
        path: `/product/`,
        ul: [`Материал: титан`, `Размер: 36x36x36`, `Вес: 300г`],
    },
    {
        id: 2,
        title: `Зубчатая деталь из титана`,
        image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        description: `ООО «Пронская Металлобаза» — динамично развивающаяся и высокотехнологичная производственная компания, которая поставляет качественный металлопрокат.`,
        path: `/product/`,
        ul: [`Материал: титан`, `Размер: 36x36x36`, `Вес: 300г`],
    },
    {
        id: 3,
        title: `Зубчатая деталь из титана`,
        image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        description: `ООО «Пронская Металлобаза» — динамично развивающаяся и высокотехнологичная производственная компания, которая поставляет качественный металлопрокат.`,
        path: `/product/`,
        ul: [`Материал: титан`, `Размер: 36x36x36`, `Вес: 300г`],
    },
    {
        id: 4,
        title: `Зубчатая деталь из титана`,
        image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        description: `ООО «Пронская Металлобаза» — динамично развивающаяся и высокотехнологичная производственная компания, которая поставляет качественный металлопрокат.`,
        path: `/product/`,
        ul: [`Материал: титан`, `Размер: 36x36x36`, `Вес: 300г`],
    },
    {
        id: 5,
        title: `Зубчатая деталь из титана`,
        image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
        description: `ООО «Пронская Металлобаза» — динамично развивающаяся и высокотехнологичная производственная компания, которая поставляет качественный металлопрокат.`,
        path: `/product/`,
        ul: [`Материал: титан`, `Размер: 36x36x36`, `Вес: 300г`],
    },


]

const Suppliers = () => {

    const router = useRouter();
    const [search, setSearch] = useState<string>('');
    const [isValid, setIsValid] = useState(false);

    const [filters, setFilters] = useState([
        {
            name: 'ТехПроцесс',
            items: [
                {
                    name: 'Категория 1',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
                {
                    name: 'Категория 2',
                },
                {
                    name: 'Категория 3',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
            ]
        },
        {
            name: 'Услуга',
            items: [
                {
                    name: 'Категория 1',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
                {
                    name: 'Категория 2',
                },
                {
                    name: 'Категория 3',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
            ]
        },
        {
            name: 'Продукция',
            items: [
                {
                    name: 'Категория 1',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
                {
                    name: 'Категория 2',
                },
                {
                    name: 'Категория 3',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
            ]
        }
    ]);


    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        router.push(`/suppliers/${search}`)
    }

    useEffect(() => {
        // @ts-ignore
        if (!router.isReady) return;
        // @ts-ignore
        setSearch(router.query.id);

    }, [router.isReady])
    useEffect(() => {

        let searchValid: boolean = search.length > 0;
        setIsValid(searchValid)

    }, [search])


    return (
        <>
            <div className={`container`}>
                <motion.div
                    variants={fadeIn}
                    custom={5}
                    initial={`initial`}
                    animate={`animate`}
                    className={`search mt-4`}>
                    <form onSubmit={handleOnSubmit}>
                        <div className={`row gx-2 align-items-center`}>
                            <div className={`col-5`}>
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
                </motion.div>

                <div className={'suppliers-search mt-4'}>
                    <div className={'suppliers-search-header'}>
                        23 поставщика на «{search}»
                    </div>
                    <div className={`suppliers-search-tabs d-flex align-items-center mt-3`}>
                        <motion.button
                            variants={rightIn}
                            custom={1}
                            initial={`initial`}
                            animate={`animate`}
                            type={`button`}
                            className={`btn btn-outline-info btn-sm rounded-pill`}>
                            ТехПроцесс
                        </motion.button>
                        <motion.button
                            variants={rightIn}
                            custom={3}
                            initial={`initial`}
                            animate={`animate`}
                            type={`button`}
                            className={`btn btn-outline-info btn-sm rounded-pill`}>
                            Услуга
                        </motion.button>
                        <motion.button
                            variants={rightIn}
                            custom={5}
                            initial={`initial`}
                            animate={`animate`}
                            type={`button`}
                            className={`btn btn-outline-info btn-sm rounded-pill`}>
                            Продукция
                        </motion.button>
                    </div>
                </div>

                <div className={`catalog mt-4`}>
                    <div className={`row`}>
                        <div className={`col-3`}>
                            <div className="catalog-filter">
                                <div className="checkbox-group">
                                    {
                                        filters.map((item, index) => (
                                            <WoodCheckBox key={index} props={item} id={index}/>
                                        ))
                                    }
                                </div>
                                <button className={`btn mt-4 btn-success`}>
                                    Применить фильтры
                                </button>
                            </div>
                        </div>
                        <div className={`col-9`}>
                            <div className={`catalog-items`}>
                                {
                                    store.map((item: ICard, index: number) => (
                                        <motion.div
                                            variants={rightIn}
                                            custom={index * 2}
                                            initial={`initial`}
                                            animate={`animate`}
                                            key={item.id}>
                                            <Card
                                                id={item.id}
                                                image={item.image}
                                                title={item.title}
                                                description={item.description}
                                                path={item.path}
                                                ul={item.ul}/>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


const Card: React.FC<ICard> = ({id, ul, image, description, path, title}) => {


    return (
        <div className={`card mb-3`}>
            <div className={`row catalog-item`}>
                <div className={`catalog-image`}>
                    <img
                        src={`${image}`}
                        alt=""/>
                </div>
                <div className="col info-block">
                    <h2 className={`title mb-3`}>
                        <Link href={`${path}${id}`}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </h2>
                    <p>{description}</p>
                    <ul className={`my-3`}>
                        {
                            ul.map((i: string, index: number) => <li key={index}>{i}</li>)
                        }
                    </ul>
                    <Link href={`${path}${id}`}>
                        <a className={`btn btn-sm btn-info`}>
                            Узнать больше
                        </a>
                    </Link>

                </div>
            </div>
        </div>
    )
}


Suppliers.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {
                page
            }
        </Layout>
    )
}

export default Suppliers;