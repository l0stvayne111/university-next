import React from 'react';

import style from './index.module.scss';
import {Variants, AnimatePresence, motion} from "framer-motion";
import {fadeIn, scaleIn} from '../../motion';


const scaleMotion: Variants = {
    initial: {
        scale: 1,
    },
    animate: {
        scale: 0.8,
    }
}

type IModal = {
    modal: {
        id: string,
        isOpen: boolean,
    },
    title: string,
    onClose: (id: string) => void,
}


const Modal: React.FC<IModal> = (
    {
        title,
        modal,
        children,
        onClose}) => {

    const {id, isOpen} = modal

    return (
        <AnimatePresence>
            {
                isOpen && (
                    <motion.div
                        variants={fadeIn}
                        initial={`initial`}
                        animate={`animate`}
                        exit={`initial`}
                        custom={0.5}
                        className={style.modal}
                    >
                        <motion.div
                            variants={scaleIn}
                            initial={`initial`}
                            animate={`animate`}
                            exit={`initial`}
                            custom={1}
                            className={`${style.body} body`}
                        >
                            <motion.button
                                whileHover={{ scale: 1.3 }}
                                className={style.close}
                                onClick={() => onClose(id)}
                                type={`button`}>
                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"/>
                                    <line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"/>
                                </svg>
                            </motion.button>
                            <div className={style.title}>
                                {title}
                            </div>


                            {
                                children
                            }

                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
};

export default Modal;