import React from 'react';
import Layout from './layout';
import styles from '../assets/styles/home.module.scss';

interface IProps {
 
}

const Index: React.FunctionComponent<IProps> = () => {
  return (
      <Layout>
        <section className={styles.about}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className={`mb-30`}>
                  <img src="https:www.devsnews.com/wp/bazna/wp-content/uploads/2019/07/about-1.jpg" alt="About Me" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className={`${styles.aboutWrapper} mb-30`}>
                  <div className={`${styles.sectionToTitle} mb-35`}>
                    <span>About Me</span>
                    <h1>The Most Poplar Actor In USA</h1>
                  </div>
                  <div className={styles.aboutTOCOntent}>
                    <p>But we ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing sed doeius mods tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimsi veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in reprehendere.</p>
                    <span className={`btn ${styles.btnBaran}`}>Learn More <em className={`${styles.longArrow} fa fa-long-arrow-right`}></em></span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  )
}
export default Index
