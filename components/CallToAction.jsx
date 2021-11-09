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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              consectetur recusandae itaque doloribus accusantium atque dolor,
              distinctio veritatis non, possimus id. Eos consequatur facere
              repudiandae harum quod sed tempore minus hic? Adipisci beatae
              atque cum fugiat corporis aspernatur eos impedit eveniet quo omnis
              labore necessitatibus hic commodi nemo nobis repellendus, nostrum
              facilis quae sequi cumque.
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
