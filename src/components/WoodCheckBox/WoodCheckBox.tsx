import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {rightIn} from "../../motion";

const WoodCheckBox: React.FC<{ props: { name: string, items: Array<any> }, id: number }> = ({props, id}) => {
    const hasChildren = props.items && props.items.length;

    const [check, setCheck] = useState(false)

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    variants={rightIn}
                    custom={id}
                    initial={`initial`}
                    animate={`animate`}
                    className={`x`}>
                    <label>
                        <input type="checkbox" onChange={() => setCheck(!check)}/>
                        <span className="checkbox">
                        <span className="check"/>
                    </span>
                        {props.name}
                    </label>
                    <AnimatePresence exitBeforeEnter>
                        {
                            check && (
                                <motion.div
                                    variants={rightIn}
                                    custom={id}
                                    initial={`initial`}
                                    animate={`animate`}
                                    className={`y`}>
                                    {
                                        hasChildren && props.items.map((item, index) => (
                                            <WoodCheckBox key={index} props={item} id={index}/>
                                        ))
                                    }
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default WoodCheckBox;