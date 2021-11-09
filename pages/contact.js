import React from "react";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero/Hero";
import Subscribe from "../components/Subscribe/Subscribe";

const contact = () => {
  return (
    <>
      <Hero>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-3 fw-bold">Contact Me</h1>
          <div className="row">
            <div className="col-12 mx-auto">
              <button className="btn btn-primary rounded-0 p-3 mt-2">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </Hero>
      <FAQ />{" "}
      <section className="py-5 ">
        <Subscribe />
      </section>
    </>
  );
};

export default contact;
