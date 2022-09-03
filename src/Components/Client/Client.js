import React, { useCallback, useRef } from "react";
import "./Client.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore from "swiper/core";
SwiperCore.use([Navigation]);
function Client() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <section className="client">
        <div className="container">
          <div className="box">
            <div className="left">
              <div className="title">
                <h2>What our clients say about us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                </p>
              </div>
            </div>
            <div className="right">
              {" "}
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                  prevEl: ".left_arrow",
                  nextEl: ".right_arrow",
                }}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  <div>
                    <h2>
                      "The best agency we’ve worked with so far. They understand
                      our product and are able to add new features with a great
                      focus."
                    </h2>
                    <div className="client_container">
                      <div className="client_left">
                        <div className="box">
                          <div className="client_info">
                            <img src="images/clientImg.png" alt="clientImg" />
                            <div className="client_info_text">
                              <h5>Jenny Wilson</h5>
                              <p>Vice President</p>
                            </div>
                          </div>
                          <div className="client_right">
                            <div className="left_arrow">
                              <i className="fa-solid fa-chevron-left"></i>
                            </div>
                            <div className="right_arrow">
                              <i className="fa-solid fa-chevron-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <h2>"ABC"</h2>
                    <div className="client_container">
                      <div className="client_left">
                        <div className="box">
                          <div className="client_info">
                            <img src="images/clientImg.png" alt="clientImg" />
                            <div className="client_info_text">
                              <h5>Alif</h5>
                              <p>Troniks Manager</p>
                            </div>
                          </div>
                          <div className="client_right">
                            <div className="left_arrow">
                              {" "}
                              <i className="fa-solid fa-chevron-left"></i>
                            </div>
                            <div className="right_arrow">
                              <i className="fa-solid fa-chevron-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <h2>
                      "The best agency we’ve worked with so far. They understand
                      our product and are able to add new features with a great
                      focus."
                    </h2>
                    <div className="client_container">
                      <div className="client_left">
                        <div className="box">
                          <div className="client_info">
                            <img src="images/clientImg.png" alt="clientImg" />
                            <div className="client_info_text">
                              <h5>Jenny Wilson</h5>
                              <p>Vice President</p>
                            </div>
                          </div>
                          <div className="client_right">
                            <div className="left_arrow">
                              {" "}
                              <i className="fa-solid fa-chevron-left"></i>
                            </div>
                            <div className="right_arrow">
                              <i className="fa-solid fa-chevron-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Client;
