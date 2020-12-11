import React from 'react';
import styles from '../src/assets/styles/footer.module.scss';
import { Localization } from '../src/assets/config/Localization';
import { Container, Grid } from '@material-ui/core';

interface IProps {

}
const Footer: React.FunctionComponent<IProps> = (props:IProps) => {
    return (
        <footer className={styles.footer}>

            <div className={styles.bgParticle}>
                <img src={'/pictures/footer/particle.jpg'} alt="particle-baransm" />
            </div>
                <Grid>
            </Grid>
            <Container maxWidth="lg">

                <Grid container spacing={4}>
                    <Grid item xs={12} >
                        <img className="img-fluid mb-4" style={{ width: "205px" }} src={'/pictures/logo/logo.png'}  alt="logo-BaranSM" />
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid md={3} sm={6} xs={12} item> 
                            <div className={`${styles.singleContactDetails} text-center phone`}>
                                <span className="fa fa-phone"></span>
                                <h4>{Localization.about_us }</h4>
                                <p >026 34483700 </p>
                                <p >0912 22222222</p>
                            </div>
                        </Grid>
                        <Grid md={3} sm={6} xs={12} item>
                            <div className={`${styles.singleContactDetails} text-center mail`}>
                                <span className="fa fa-envelope"></span>
                                <h4>E-mail</h4>
                                <p >info@cboun.com</p>
                                <p >support@cboun.com</p>
                            </div>
                        </Grid>
                        <Grid md={3} sm={6} xs={12} item>
                            <div className={`${styles.singleContactDetails} text-center`}>
                                <span className="fa fa-book"></span>
                                <h4>دفتر عمان</h4>
                                <p >  ایران، استان البرز، کرج، پل آزادگان، خیابان طالقانی، واحد 6 شمالی، نبش خیابان شهید مدنی، برج طوبی ، طبقه 12 </p>
                            </div>
                        </Grid>

                        <Grid md={3} sm={6} xs={12} item>
                            <div className={`${styles.singleContactDetails} text-center`}>
                                <span className="fa fa-server"></span>
                                <h4>دفتر مرکزی</h4>
                                <p >  ایران، استان البرز، کرج، پل آزادگان، خیابان طالقانی، واحد 6 شمالی، نبش خیابان شهید مدنی، برج طوبی ، طبقه 12 </p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div className={`${styles.footerSocialLink} text-center`}>
                        <ul>
                            <li><span><em className="fa fa-facebook"></em></span></li>
                            <li><span><em className="fa fa-twitter"></em></span></li>
                            <li><span><em className="fa fa-google-plus"></em></span></li>
                            <li><span><em className="fa fa-instagram"></em></span></li>
                            <li><span><em className="fa fa-dribbble"></em></span></li>
                        </ul>
                    </div>
                    <span className={styles.titleDivider}>
                        <span className="fa fa-diamond" aria-hidden="true"></span>
                    </span>
                    <div className={`${styles.footerText}`}>
                        <h6>Copyright © 2020 BaranSM All right Reserved Powered By <span>BaranSM</span></h6>
                    </div>
                </Grid>
            </Container>
        </footer>
    )
}
export default Footer