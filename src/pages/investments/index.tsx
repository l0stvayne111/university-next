import React, {ReactElement} from 'react';
import Layout from "../../layout";
import {motion} from "framer-motion";
import {fadeUp} from "../../motion";

const Investments = () => {
    return (
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
                            На этой странице будут инвестиционные предложения!
                        </motion.h1>


                    </div>
                </div>
            </div>
        </div>
    );
};

Investments.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {
                page
            }
        </Layout>
    )
}

export default Investments;