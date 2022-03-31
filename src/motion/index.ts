import {Variants} from "framer-motion";

export const fadeUp: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
        }
    }),

}
export const scaleIn: Variants = {
    initial: {
        scale: 0.3,
    },
    animate: i => ({
        scale: 1,
        transition: {
            delay: i * 0.1,
        }
    }),
}

export const fadeIn: Variants = {
    initial: {
        opacity: 0,
    },
    animate: i => ({
        opacity: 1,
        transition: {
            delay: i * 0.1,
            duration: .5,
            ease: `easeOut`
        }
    }),
}

export const rightIn: Variants = {
    initial: {
        opacity: 0,
        x: 20,
    },
    animate: i => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            ease: `easeOut`,
            duration: .7
        }
    }),
}

