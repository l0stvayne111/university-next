import React from 'react';

import style from './index.module.scss';

const ContactCard: React.FC<{
    state: {
        id: number,
        img: string,
        title: string,
        address: string,
        phone: string,
        man: string,
    }
}> = ({state}) => {


    const {id, img, title, phone, man, address} = state;


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
                        <p className={`mb-2`}>{address}</p>
                        <p className={`mb-2`}>{phone}</p>
                        <p>{man}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;