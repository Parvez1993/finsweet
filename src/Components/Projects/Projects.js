import React from "react";
import "./Project.css";
function Projects() {
  return (
    <div class="project">
      <div class="container">
        <div class="title">
          <h2>View Our Projects</h2>
          <a class="project__contact">
            View More
            <i class="fa-solid fa-arrow-right-long"> </i>
          </a>
        </div>

        <div class="box project__box">
          <div class="left">
            <img src="/images/Card.png" alt="card" class="project__box__img" />

            <div class="left_content">
              <div class="details">
                <h3>Workhub office Webflow Webflow Design</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam
                </p>
                <a class="project__btn">
                  View portfolio
                  <i class="fa-solid fa-arrow-right-long"> </i>
                </a>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="right__content">
              <img src="/images/subCard1.png" alt="sub_card" />
              <div class="right_content_text">
                <div class="details">
                  <h3>Unisaas Website Design</h3>
                  <a class="project__btn">
                    View portfolio
                    <i class="fa-solid fa-arrow-right-long"> </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="right__content">
              <img src="/images/subCard2.png" alt="sub_card" />
              <div class="right_content_text">
                <div class="details">
                  <h3>Unisaas Website Design</h3>
                  <a class="project__btn">
                    View portfolio
                    <i class="fa-solid fa-arrow-right-long"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
