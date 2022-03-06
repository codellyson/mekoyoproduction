import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero/Hero";

function index() {
  return (
    <section>
      <Head>
        <title>Mekoyo Production</title>
      </Head>
      <Hero>
        <div className="px-4 py-5  text-center row ">
          <h1 className="display-3 fw-bold py-3">Our Artistes</h1>
          <Link href={"#artistes"}>
            <a className="btn btn-primary rounded-0 py-3 text-white  btn-lg px-4">
              Explore
            </a>
          </Link>
        </div>
      </Hero>
      <div className="container py-6" id="artistes">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mx-auto">
            <div className="card bg-transparent border-primary">
              <Image
                src={require("../../images/ckay.jpg")}
                alt="Ckay De 4 you"
              />
              <div className="card-body">
                <h5 className="card-title">Ckay</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Et odio pellentesque diam volutpat commodo sed egestas. Enim
                  tortor at auctor urna nunc id cursus metus. Turpis egestas
                  maecenas pharetra convallis posuere. Sed euismod nisi porta
                  lorem mollis aliquam ut.
                </p>
                <Link href="/artistes/ckay">
                  <a className="btn btn-primary">Read more</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-8 mx-auto">
            <div className="card bg-transparent border-primary">
              <Image
                src={require("../../images/bella.jpg")}
                alt="bella schmurda"
              />
              <div className="card-body">
                <h5 className="card-title">Bella</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Et odio pellentesque diam volutpat commodo sed egestas. Enim
                  tortor at auctor urna nunc id cursus metus. Turpis egestas
                  maecenas pharetra convallis posuere. Sed euismod nisi porta
                  lorem mollis aliquam ut.
                </p>
                <Link href="/artistes/bella">
                  <a className="btn btn-primary">Read more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
