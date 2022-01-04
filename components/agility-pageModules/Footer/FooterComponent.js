import styles from "./footer.module.scss";
import React from "react";

const FooterComponent = (props) => {
  console.log("Footer Component", props);
  const toggleManu = (e) => {
    e.target.parentNode.classList.toggle("expand");
  };

  const scrollTo = (classname) => {
    // this.router.navigateByUrl('/').then(()=> {
    //     let offsetTop = window.document.getElementsByClassName(classname)[0]['offsetTop'] - 150;
    //     window.scrollTo(0, offsetTop);
    // });
  };

  return (
    <footer className={styles.footer}>
      <div className={`clearfix ${styles.top_section}`}>
        <div className="container">
          <div className={styles.logo}>
            <img src="https://sunstone.edu.in/assets/images/logo_sunstone_white.webp" />
          </div>
          <div className={styles.social_links}>
            <ul>
              <li>
                <a href="https://www.facebook.com/sunstoneedu/">
                  {" "}
                  <i className="fa fa-facebook"></i>{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/SunstoneEdu">
                  {" "}
                  <i className="fa fa-twitter"></i>{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sunstoneedu/">
                  {" "}
                  <i className="fa fa-instagram"></i>{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/school/sunstone-eduversity/">
                  {" "}
                  <i className="fa fa-linkedin"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.middle_section} clearfix`}>
        <div className="container">
          <div className={styles.link_box}>
            <h4
              onClick={(e) => {
                toggleManu(e);
              }}
            >
              <span src="/footer-angle-down.webp"></span> Company
            </h4>
            <ul>
              <li>
                <a href="#"> About Us </a>
              </li>
              <li>
                <a href="#"> Blog </a>
              </li>
              <li>
                <a href="#"> Partner With us </a>
              </li>
              <li>
                <a href="#"> Sunstone Scholarship Test </a>
              </li>
              <li>
                <a href="https://www.myfutureapp.in/?utm_source=sunstoneweb&utm_medium=footer&utm_campaign=referral+">
                  {" "}
                  MyFuture Program{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.link_box}>
            <h4
              onClick={(e) => {
                toggleManu(e);
              }}
            >
              {" "}
              <span src="/footer-angle-down.webp"></span> Pay After Placement
              MBA
            </h4>
            <ul>
              <li>
                <a href="#"> All Programs </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  Global Immersion Program <sup>* NEW</sup>{" "}
                </a>
              </li>
              <li>
                <a href="#" onClick={scrollTo("domain_wise_section")}>
                  {" "}
                  Placements{" "}
                </a>
              </li>
              <li>
                <a href="#"> Pay After Placement </a>
              </li>
              <li>
                <a href="#"> Application Status </a>
              </li>
            </ul>
          </div>
          <div className={styles.link_box}>
            <h4
              onClick={(e) => {
                toggleManu(e);
              }}
            >
              {" "}
              <span src="/footer-angle-down.webp"></span> Sunstone Locations
            </h4>
            <ul>
              <li> </li>
            </ul>
          </div>
          <div className={styles.link_box}>
            <h4
              onClick={(e) => {
                toggleManu(e);
              }}
            >
              {" "}
              <span src="/footer-angle-down.webp"></span> Specialization
            </h4>
            <ul>
              <li>
                <a href="#"> Marketing </a>
              </li>
              <li>
                <a href="#"> Finance </a>
              </li>
              <li>
                <a href="#"> Retail Management </a>
              </li>
              <li>
                <a href="#"> Operations </a>
              </li>
              <li>
                <a href="#"> Human Resource &amp; Recruitment </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  BFSI (Banking, Financial Services and Insurance){" "}
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.link_box} ${styles.small}`}>
            <h4>ABOUT SUNSTONE EDUVERSITY</h4>
            <p>
              3rd Floor, Tower B, Unitech Cyber Park, Sector 39, Gurgaon,
              Haryana - 122002
            </p>
            <ul>
              <li>
                <a href="mailto:connect@sunstone.edu.in">
                  {" "}
                  <i className="fa fa-location-arrow"></i>{" "}
                  connect@sunstone.edu.in{" "}
                </a>
              </li>
              <li>
                <a href="tel:7065303030">
                  {" "}
                  <i className="fa fa-phone"></i> +91 7065-30-30-30{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className={`${styles.link_box} ${styles.full}`}>
            <h4>Top Read</h4>
            <ul>
              <li>
                {" "}
                <a href="#">MBA vs PGDM</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">MBA Eligiblity</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">MBA Placement Criteria</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">MBA in Marketing: Future Scope</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Dual Specialization in MBA</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Why MBA after Engineering?</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.bottom_section} clearfix`}>
        <div className="container">
          <div className={styles.left}>
            <p>&copy; Copyright 2020. Sunstone Eduversity</p>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                {" "}
                <a href="#">Privacy Policy</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Terms of Use</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
