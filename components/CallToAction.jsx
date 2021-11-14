import React from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
function CallToAction() {
  return (
    <section className="container my-5">
      <ScrollAnimation animateIn="fadeIn">
        <div className="row justify-content-center align-items-center bg-main-dark ">
          <div className="col-10 border-primary border p-3 ">
            <div className="card bg-transparent border-0  rounded-0 ">
              Mr Mekoyo has earned a positive reputation because of the truly
              exceptional service provided to each of our client. We are ready
              to work with you to take your music a step further into the
              advanced music world by giving you the best output. We understand
              that your needs comes first, and we’re ready to adapt our services
              to ensure your success.
            </div>
            <Link href="#">
              <a className="btn btn-primary btn-lg rounded-0 border-0 mx-auto py-3 my-3">
                {" "}
                Buy Beats and Presets
              </a>
            </Link>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default CallToAction;
