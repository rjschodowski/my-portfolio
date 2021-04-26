import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.css'
import { container, content } from './layout.module.css'

const Layout = (props) => {
    return (
        <div className={container}>
            <div className={content}>
                <Header />
                {props.children}  
            </div>
           
            <Footer />
        </div>
    )
}

export default Layout