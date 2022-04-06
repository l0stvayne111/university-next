import React from 'react';

import style from './index.module.scss';

const NewsCard:React.FC<{state : {id: number, img: string, title: string, description: string, date: string}, type: 'ROW' | 'COLUMN'}> = ({state, type}) => {

    const {id, date, img, title, description} = state;

    return (
        <div className={style.card}>
            <div className={`row`}>
                {
                    type === 'ROW' && (
                        <>
                            <div className={`col-auto`}>
                                <div className={style.img}>
                                    <img src={img} alt=""/>
                                </div>
                            </div>
                            <div className={`col py-3`}>
                                <div className={style.dialog}>
                                    <h3>{title}</h3>
                                    <p className={`mt-3 mb-2`}>{description}</p>
                                    <div className={style.date}>{date}</div>
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    type === 'COLUMN' && (
                        <>
                            <div className={`col-12`}>
                                <div className={`${style.img} ${style.column}`}>
                                    <img src={img} alt=""/>
                                </div>
                            </div>
                            <div className={`col-12 py-3`}>
                                <div className={style.dialog}>
                                    <h3>{title}</h3>
                                    <p className={`mt-3 mb-2`}>{description}</p>
                                    <div className={style.date}>{date}</div>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    );
};

export default NewsCard;