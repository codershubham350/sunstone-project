import React from "react";

const CampusImageSlider = () => {
  return (
    <>
      <header>Partner Campuses</header>
      <div class="container">
        <div class="imgSlider">
          <figure class="slide" id="slideone">
            <img
              src="https://sunstone.edu.in/assets/images/sandip_icon.png"
              alt="slide1"
            />
            <figcapture>Sandip University</figcapture>
          </figure>

          <figure class="slide" id="slidetwo">
            <img
              src="https://sunstone.edu.in/assets/images/rathinam_icon.png"
              alt="slide2"
            />
            <figcapture>Rathinam Institute</figcapture>
          </figure>

          <figure class="slide" id="slidethree">
            <img
              id="slidethree"
              src="https://sunstone.edu.in/assets/images/himgri_icon.png"
              alt="slide3"
            />
            <figcapture>Himgiri ZEE University</figcapture>
          </figure>

          <figure class="slide" id="slidefour">
            <img
              src="	https://sunstone.edu.in/assets/images/pism_icon.png"
              alt="slide4"
            />
            <figcapture>PISM Bangalore</figcapture>
          </figure>
          <figure class="slide" id="slidefive">
            <img
              src="	https://sunstone.edu.in/assets/images/ct_icon.png"
              alt="slide5"
            />
            <figcapture>CT University</figcapture>
          </figure>
          <figure class="slide" id="slidesix">
            <img
              src="	https://sunstone.edu.in/assets/images/RenU_icon.png"
              alt="slide6"
            />
            <figcapture>Renaissance University</figcapture>
          </figure>
          <figure class="slide" id="slideseven">
            <img
              src="https://sunstone.edu.in/assets/images/rri_icon.png"
              alt="slide7"
            />
            <figcapture>RR Institutions Bangalore</figcapture>
          </figure>
          <figure class="slide" id="slideeight">
            <img
              src="	https://sunstone.edu.in/assets/images/agc_icon.png"
              alt="slide8"
            />
            <figcapture>AIM Management</figcapture>
          </figure>
          <figure class="slide" id="slidenine">
            <img
              src="https://sunstone.edu.in/assets/images/sage_icon.png"
              alt="slide9"
            />
            <figcapture>SAGE University</figcapture>
          </figure>
        </div>
      </div>
    </>
  );
};

export default CampusImageSlider;
