import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/global.css'
import { container, content } from './layout.module.css'
import GbiBridged from './bg-image'

const Layout = (props) => {
    return (
        <div className={container}>
            <GbiBridged />
            <div className={content}>
                <Header />
                {props.children}  
            </div>
            <Footer />
        </div>
    )
}

export default Layout