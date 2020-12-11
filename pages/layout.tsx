import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

interface IProps {

}

const Layout: React.FunctionComponent<IProps> = (props) => {
    return (
        <>
            <Navbar />
            <div className="main-apps">
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;