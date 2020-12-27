import React from "react";
import styles from "../src/assets/styles/home.module.scss";
import {Container, Grid} from "@material-ui/core";
import Layout from "../src/Components/layout/layout";

interface IProps {}

const Index: React.FunctionComponent<IProps> = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <div className={`mb-30`}>
                <img src="https:www.devsnews.com/wp/bazna/wp-content/uploads/2019/07/about-1.jpg" alt="About Me" />
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={`${styles.aboutWrapper} mb-30`}>
                <div className={`${styles.sectionToTitle} mb-35`}>
                  <span>About Me</span>
                  <h1>The Most Poplar Actor In USA</h1>
                </div>
                <div className={styles.aboutTOCOntent}>
                  <p>But we ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing sed doeius mods tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minimsi veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in
                    reprehendere.
                  </p>
                  <span className={`btn ${styles.btnBaran}`}>
                    Learn More <em className={`${styles.longArrow} fa fa-long-arrow-right`}></em>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
};
export default Index;
