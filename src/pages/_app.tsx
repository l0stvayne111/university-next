import '../styles/globals.scss'
import '../styles/bootstrap-grid.min.css'
import '../styles/index.scss';
import {AnimatePresence} from "framer-motion";
import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode,
    auth: boolean,
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout,
}


export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
        </AnimatePresence>
    )
}


