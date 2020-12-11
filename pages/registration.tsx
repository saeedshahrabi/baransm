import { Formik } from 'formik';
import React, { useState } from 'react';
import styles from '../assets/styles/registration.module.scss';
import Layout from './layout';
import * as Yup from 'yup'
import { APP_FORM_CONTROL, FormControl } from '../src/assets/_formik/FormControl/FormControl';
import { Localization } from '../src/assets/config/Localization';
import { AppRegex } from '../src/assets/regex/regex';

interface IProps {

}

enum Pagemode {
    signIn = "SIGN_IN",
    signUp = "SIGN_UP",
}

const Registration: React.FunctionComponent<IProps> = () => {

    const [PageMode, setPageMode] = useState(Pagemode.signIn)

    const initialValueForSignin = {

    }

    const submitFormSignIn = (value: any) => {

    }


    const signIn = () => {
        return (
            <>
                <div className={`${styles.registeration}`}>
                    <div className="container position-relative" style={{ zIndex: 222 }}>
                        <div className={`${styles.registerationWrapper}  d-flex`}>
                            <div className={`${styles.formRegisteration}`}>
                                <h2> ثبت نام در سایت </h2>
                                <p>اگر هنوز ثبت نام نکرده اید روی دکمه زیر کلیک کنید </p>
                                <div className="text-center">
                                    <button
                                        onClick={() => setPageMode(Pagemode.signUp)}
                                    >ثبت نام در سایت</button>
                                </div>
                            </div>
                            <div className={styles.desceriptionRegisteration}>
                                <h2> ورود به حساب کاربری</h2>
                                <div>
                                    <span><em className="fa fa-facebook-f"></em></span>
                                    <span><em className="fa fa-google-plus"></em></span>
                                    <span><em className="fa fa-linkedin"></em></span>
                                </div>
                                <p className="text-muted"> لطفا نام کاربری و رمز عبور خود را وارد کنید</p>
                                <Formik
                                    initialValues={initialValueForSignin}
                                    onSubmit={(v) => submitFormSignIn(v)}
                                >
                                    {({ handleSubmit }) => (
                                        <>

                                            <div className="row justify-content-center">
                                                <div className="col-md-7">
                                                    <FormControl
                                                        control={APP_FORM_CONTROL.INPUT}
                                                        name={"email"}
                                                        placeholder={"ایمیل"}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-md-7">
                                                    <FormControl
                                                        control={APP_FORM_CONTROL.INPUT}
                                                        name={"password"}
                                                        placeholder="رمز عبور"
                                                    />
                                                </div>
                                            </div>
                                            <div className={`${styles.btnSignUP} text-center`}>
                                                <button
                                                    onClick={() => handleSubmit()}
                                                >
                                                    ورود
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const initialValueForSignup = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    }

    const validationSignUp = Yup.object({
        first_name: Yup.string().required(Localization.required_field),
        last_name: Yup.string().required(Localization.required_field),
        email: Yup.string().required(Localization.required_field).matches(AppRegex.email,Localization.email_not_correct),
        password: Yup.string().required(Localization.required_field),
    });

    const submitFormSignUp = async (value: any) => {
        try {
            // await _Registration.signup(value)
            setPageMode(Pagemode.signIn)
        } catch (error) {
            console.log(error)
        }
    }

    const signUp = () => {
        return (
            <>
                <div className={`${styles.registeration}`}>
                    <div className="container position-relative" style={{ zIndex: 222 }}>
                        <div className={`${styles.registerationWrapper}  d-flex`}>
                            <div className={styles.desceriptionRegisteration}>
                                <h2> ثبت نام در سایت</h2>
                                <div>
                                    <span className={styles.social}><em className="fa fa-facebook-f"></em></span>
                                    <span className={styles.social}><em className="fa fa-google-plus"></em></span>
                                    <span className={styles.social}><em className="fa fa-linkedin"></em></span>
                                </div>
                                <p className="text-muted">یا فقط کافیست فرم زیر را پر کنید</p>
                                <Formik
                                    initialValues={initialValueForSignup}
                                    onSubmit={(v) => submitFormSignUp(v)}
                                    validationSchema={validationSignUp}
                                >
                                    {({ handleSubmit, dirty, isValid, handleReset }) => (
                                        <>
                                            <div className="row justify-content-center">
                                                <div className="col-md-7">
                                                    <FormControl
                                                        control={APP_FORM_CONTROL.INPUT}
                                                        name={"first_name"}
                                                        placeholder={"نام"}
                                                        label={"نام"}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-md-7">
                                                    <FormControl
                                                        control={APP_FORM_CONTROL.INPUT}
                                                        name={"last_name"}
                                                        placeholder={"نام خانوادگی"}
                                                        label={"نام خانوادگی"}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-md-7">
                                                    <FormControl
                                                        control={APP_FORM_CONTROL.INPUT}
                                                        name={"email"}
                                                        placeholder={"ایمیل"}
                                                        label={"ایمیل"}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-md-7">
                                                    <FormControl
                                                        control={APP_FORM_CONTROL.INPUT}
                                                        name={"password"}
                                                        placeholder="رمز عبور"
                                                        label="رمز عبور"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className={`${styles.btnSignUP} text-center`}>
                                                <button
                                                    onClick={() => handleSubmit()}
                                                    disabled={!isValid || !dirty}
                                                >
                                                    ثبت نام
                                                </button>
                                                <button
                                                    onClick={ handleReset}
                                                  
                                                >
                                                {Localization.reset}
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </Formik>
                            </div>
                            <div className={styles.formRegisteration}>
                                <h2>قبلا ثبت نام کرده ام </h2>
                                <p>اگر قبلا ثبت نام کرده اید بر روی دکمه زیر کلیک کنید </p>
                                <div className="text-center">
                                    <button
                                        onClick={() => setPageMode(Pagemode.signIn)}
                                    >صفحه ورود</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <Layout>
            {PageMode === Pagemode.signIn ? signIn() : signUp()}
        </Layout>
    )
}

export default Registration