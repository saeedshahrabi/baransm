import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

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