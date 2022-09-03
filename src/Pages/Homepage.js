import React from "react";
import Nav from "../Components/Nav/Nav";
import Service from "../Components/Service/Service";
import Banner from "../Components/Banner/Banner";
import Project from "../Components/Projects/Projects";
import Features from "../Components/Features/Features";
import Client from "../Components/Client/Client";
function Homepage() {
  return (
    <>
      <Nav />
      <Banner />
      <Service />
      <Project />
      <Features />
      <Client />
    </>
  );
}

export default Homepage;
