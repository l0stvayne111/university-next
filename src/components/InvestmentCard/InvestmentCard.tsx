import React from 'react';

import style from './index.module.scss';


const InvestmentCard: React.FC<{
    state: {
        id: number,
        img: string,
        title: string,
        description: string,
        phone: string,
        auth: string,
        man: string,
    }
}> = ({state}) => {

    const {img, man, description, phone, id, title, auth} = state;

    return (
        <div className={style.card}>
            <div className={`row`}>
                <div className={`col-auto`}>
                    <div className={style.img}>
                        <img src={img} alt=""/>
                    </div>
                </div>
                <div className={`col py-3`}>
                    <div className={style.dialog}>
                        <h3 className={`mb-2`}>{title}</h3>
                        <p className={`mb-2`}>{auth}</p>
                        <p className={`mb-2`}>{description}</p>
                        <p className={`mb-2`}>{phone}</p>
                        <p className={`mb-2`}>{man}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InvestmentCard;