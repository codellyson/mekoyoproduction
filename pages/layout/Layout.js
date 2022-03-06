import React from "react";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Put any metadata below this comment */}
        <meta property="og:site_name" content="Mekoyo Production" />
        <meta property="og:title” content=“Since the early stages of his life, Mr Mekoyo has been proud to be in the industry and has honed the craft of Music Production, Mix and Mastering and is an exceptional Sound Engineer. We’re committed to not only providing quality services, but going the whole mile to ensure our clients are completely satisfied. We welcome you to look through our site to see all we have to offer." />
        <meta property="article:section" content="Music Production" />
        <meta property="article:tag" content="Music" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1"
        />
        <meta
          property="og:image:secure_url"
          content="https://mekoyoproduction.vercel.app/_next/static/media/one.67584f7f076e7e82ddc3e67a941a78ff.JPG"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
