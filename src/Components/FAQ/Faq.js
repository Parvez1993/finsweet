import React, { useState } from "react";
import "./Faq.css";

function Faq() {
  const [id, setId] = useState(0);

  let faqData = [
    {
      heading: "How much time does it take?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "What is your class naming convention?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "How do you communicate?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "I have a bigger project. Can you handle it?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "What is your class naming convention?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <section className="faq">
        <div className="container">
          <div className="box">
            <div className="faq_left">
              <h2>Frequently asked questions</h2>
              <p>Contact us for more info</p>
            </div>
            <div className="faq_right">
              <div className="underline"></div>
              {faqData.map((i, k) => {
                return (
                  <>
                    <div className="faq_container" key={k}>
                      <p className="no">{`0${k + 1}`}</p>
                      <div className="faq_text">
                        <h4>{i.heading}</h4>
                        <p className={`${id === k ? "showPara" : "hidePara "}`}>
                          {i.para}
                        </p>
                      </div>
                      <i
                        className={`${
                          id === k
                            ? "fa-solid fa-xmark cross"
                            : "fa-solid fa-plus plus"
                        }`}
                        onClick={() => {
                          setId(k);
                        }}
                      ></i>
                    </div>
                    <div className="underline"></div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
