import React, {ReactElement, useState} from 'react';
import Layout from "../../layout";
import Link from 'next/link'
import {motion} from "framer-motion";
import {fadeIn, rightIn} from "../../motion";


const state = {

    id: 1,
    title: `Зубчатая деталь из титана`,
    image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
    description: `ООО «Пронская Металлобаза» предлагает поставки качественного металлопроката: лента, фольга, лист, плита, профиль, пруток, круг, труба, проволока, паковка — из цветных металлов и их сплавов (AL-алюминия, Cu-меди, Mg-магния, Ti-титана, Zn-цинка, Sn-олова, Pb-свинца, Sb-сурьма); из тугоплавких металлов и их сплавов (W-вольфрама, Mo-молибдена, Nb-ниобия, Ta-тантала, V- ванадия, Zr-циркония, Ni-никеля и других); из нержавеющей стали: (корозионно-стойкие, жаропрочные, износостойкие, конструкционные); а также: лигатуры (шихты) для производства титановых, алюминиевых, медных сплавов и спец. сталей (ВнАЛ1(2), НбА1, АБ1, ФМо60, АМВТ, МН25 и другие); редкоземельные металлы (лантан La, иттрий ИМ, индий Ин0, гольмий ГоМ1, Тербий ТбМ1, церий ЦеЭ1, неодим НМ1, бериллий Be, германий Ge и другие).`,
    path: `#`,
    ul: [`Материал: титан`, `Размер: 36x36x36`, `Вес: 300г`],

}

const Product = () => {

    const [tab, setTab] = useState<number>(1)

    return (
        <>
            <div className={`product card`}>
                <div className={`row`}>
                    <div className={`product-img`}>
                        <img src={`${state.image}`} alt=""/>
                    </div>
                    <div className={`col`}>
                        <div className={`info-block`}>
                            <div className="title mb-2">
                                {state.title}
                            </div>
                            <div className={`subtitle mb-5`}>
                                ООО «Пронская Металлобаза»
                            </div>
                            <ul className={`my-3`}>
                                {
                                    state.ul.map((i: string, index: number) => <li key={index}>{i}</li>)
                                }
                            </ul>
                            <Link href={``}>
                                <a target={`_blank`} className={`btn btn-primary`}>
                                    Перейти на сайт поставщика
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`product-tabs mt-3 mb-2`}>
                <div className={`row gx-2`}>
                    <div className={`col-auto`}>
                        <div
                            onClick={() => setTab(1)}
                            className={`card item ${tab === 1 && 'active'}`}>
                            О товаре
                        </div>
                    </div>
                    <div className={`col-auto`}>
                        <div
                            onClick={() => setTab(2)}
                            className={`card item ${tab === 2 && 'active'}`}>
                            О компании
                        </div>
                    </div>
                    <div className={`col-auto`}>
                        <div
                            onClick={() => setTab(3)}
                            className={`card item ${tab === 3 && 'active'}`}>
                            Доставка и оплата
                        </div>
                    </div>
                </div>
            </div>

            <div className={`product-content`}>
                <div className={`row`}>
                    {
                        tab === 1 && (
                            <motion.div
                                variants={rightIn}
                                custom={1}
                                initial={`initial`}
                                animate={`animate`}
                                className={`col`}>
                                <div className={`card`}>
                                    Описание 1
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                </div>
                            </motion.div>
                        )
                    }
                    {
                        tab === 2 && (
                            <motion.div
                                variants={rightIn}
                                custom={1}
                                initial={`initial`}
                                animate={`animate`}
                                className={`col`}>
                                <div className={`card`}>
                                    Описание 2
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                </div>
                            </motion.div>
                        )
                    }
                    {
                        tab === 3 && (
                            <motion.div
                                variants={rightIn}
                                custom={1}
                                initial={`initial`}
                                animate={`animate`}
                                className={`col`}>
                                <div className={`card`}>
                                    Описание 3
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at dicta dolor explicabo
                                    ipsum libero nesciunt nihil, quam quasi quibusdam ratione repellat rerum sint, soluta
                                    voluptatibus! Ad aliquam, distinctio ducimus eum facere laborum quaerat voluptate. Delectus
                                    eius facilis in magnam nulla repudiandae? Corporis dolore, dolores eum laboriosam nemo
                                    possimus praesentium!
                                </div>
                            </motion.div>
                        )
                    }
                </div>
            </div>


        </>
    );
};

Product.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {
                page
            }
        </Layout>
    )
}

export default Product;