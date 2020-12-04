import React from 'react';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Localization } from '../assets/config/Localization';
import { IUser } from '../models/user.model';
import { TInternationalization } from '../settings/setup';
import { MapDispatchToProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { action_change_app_flag } from '../redux/actions/internationalization';
import { ITheme_schema } from '../redux/actions/theme/themeAction';
import { action_update_theme } from '../redux/actions/theme';
import { redux_state } from '../redux/appState';

interface IProps {
    history?: History;
    logged_in_user?: IUser | null;
    internationalization?: TInternationalization;
    change_app_flag?: (internationalization: TInternationalization) => void;
}


const Navber: React.FunctionComponent<IProps> = (props) => {

    const changeLang = (lang: string) => {

        if (!props.change_app_flag) return;
        if (lang === "fa") {
            document.body.classList.add("rtl");
            Localization.setLanguage("fa");
            document.title = "mamad";
            props.change_app_flag({
                rtl: true,
                language: "فارسی",
                flag: "fa",
            });
        } else if (lang === "en") {
            document.body.classList.remove("rtl");
            Localization.setLanguage("en");
            document.title = "abbas";
            props.change_app_flag({
                rtl: false,
                language: "english",
                flag: "en",
            });
        }
    }

    return (
        <>
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/footer"><a>About</a></Link>
                        <div onClick={() => changeLang("fa")} >farsi</div>
                        <div onClick={() => changeLang("en")}>english</div>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"
              >
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item >Another action</NavDropdown.Item>
                <NavDropdown.Item >Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >Separated link</NavDropdown.Item>
              </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
    return {
        change_app_flag: (internationalization: TInternationalization) =>
            dispatch(action_change_app_flag(internationalization)),
        update_theme: (theme: ITheme_schema) =>
            dispatch(action_update_theme(theme)),
    };
};

const state2props = (state: redux_state) => {
    return {
        internationalization: state.internationalization,
        logged_in_user: state.logged_in_user,
        theme: state.theme,
    };
};

export default connect(state2props, dispatch2props)(Navber);