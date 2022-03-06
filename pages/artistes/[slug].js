import Head from "next/head";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero/Hero";

function artiste({ slug }) {
  const render = () => {
    switch (slug) {
      case "ckay":
        return (
          <div id="about-artiste">
            <h1>{slug.replace("-", " ")}</h1>
            <p className="fs-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              odio pellentesque diam volutpat commodo sed egestas. Enim tortor
              at auctor urna nunc id cursus metus. Turpis egestas maecenas
              pharetra convallis posuere. Sed euismod nisi porta lorem mollis
              aliquam ut. Tortor condimentum lacinia quis vel eros donec ac.
              Arcu odio ut sem nulla pharetra. Sit amet consectetur adipiscing
              elit. Quam lacus suspendisse faucibus interdum posuere lorem ipsum
              dolor. Velit laoreet id donec ultrices tincidunt arcu non sodales
              neque. Tortor consequat id porta nibh. Viverra orci sagittis eu
              volutpat odio facilisis. Id semper risus in hendrerit gravida
              rutrum quisque non tellus. Sagittis orci a scelerisque purus
              semper eget duis at tellus. A erat nam at lectus urna duis
              convallis convallis.
            </p>
          </div>
        );
      case "bella":
        return (
          <div id="about-artiste">
            <h1>{slug.replace("-", " ")}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              odio pellentesque diam volutpat commodo sed egestas. Enim tortor
              at auctor urna nunc id cursus metus. Turpis egestas maecenas
              pharetra convallis posuere. Sed euismod nisi porta lorem mollis
              aliquam ut. Tortor condimentum lacinia quis vel eros donec ac.
              Arcu odio ut sem nulla pharetra. Sit amet consectetur adipiscing
              elit. Quam lacus suspendisse faucibus interdum posuere lorem ipsum
              dolor. Velit laoreet id donec ultrices tincidunt arcu non sodales
              neque. Tortor consequat id porta nibh. Viverra orci sagittis eu
              volutpat odio facilisis. Id semper risus in hendrerit gravida
              rutrum quisque non tellus. Sagittis orci a scelerisque purus
              semper eget duis at tellus. A erat nam at lectus urna duis
              convallis convallis.
            </p>
          </div>
        );
      default:
        return <h1>404</h1>;
    }
  };
  return (
    <section>
      <Head>
        <title>{slug.replace("-", " ")}</title>
      </Head>
      <Hero>
        <div className="px-4 py-5  text-center row ">
          <h1 className="display-3 fw-bold py-3">{slug.replace("-", " ")}</h1>
          <Link href={"#about-artiste"}>
            <a className="btn btn-primary rounded-0 py-3 text-white  btn-lg px-4">
              Read More About {slug.replace("-", " ")}
            </a>
          </Link>
        </div>
      </Hero>
      <div className="container">
        {render()}
        <Link href={"/artistes"}>
          <a className="btn btn-primary rounded-0 py-3 text-white  btn-lg px-4">
            Go back
          </a>
        </Link>
      </div>
    </section>
  );
}

// create a getStatitic function to get the slug from the url

export default artiste;

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: ["/artistes/ckay", "/artistes/bella"],
    fallback: false,
  };
};
