import React from "react";
import Image from "next/image";
function Featurettes() {
  return (
    <div>
      <h1 className="display-5 fw-400">What We do</h1>
      <hr />
      <div className="row featurette my-5 py-5 align-items-center ">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            JINGLES & ADVERTISING {""} <br />
            <span className="text-sharp-gold">
              We Create Jingles For Both Television And Radio
            </span>
          </h2>
          <p className="lead">
            It’s made a big difference for many of our clients who has entrusted
            part of the creative process of their branding to us and a very much
            satisfied in the end. As we is provided with the most interractive
            jingles all while havng their valued customers in mind. We ensure
            all details are put into consideration during this process. Whenever
            you or your brand works with Mr Mekoyo, you can trust that your
            brand is in great hands.
          </p>
        </div>
        <div className="col-md-5">
          <Image
            src={require("../images/six.jpg")}
            className="img-fluid"
            alt="jingle"
          />
        </div>
      </div>

      <div className="row featurette my-5 py-5 align-items-center">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            LIVE RECORDING AND MIXING <br />
            <span className="text-sharp-gold">
              We Offer Quality Live Recording And Mixing To Great Sound Texture.
            </span>
          </h2>
          <p className="lead">
            We want all our clients whether as a band, group, choir, or
            individual artists to experience the impressive level of
            professionalism when working with Mr Mekoyo as our only goal and
            objective is to bring your creativity to reality in line with modern
            day standards.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <Image
            src={require("../images/seven.jpg")}
            className="img-fluid"
            alt="Liverecording"
          />
        </div>
      </div>

      <div className="row featurette my-4 align-items-center">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            INSTRUMENTALS {""} <br />
            <span className="text-sharp-gold">
              we create instrumentals | beats for artists.
            </span>
          </h2>
          <p className="lead">
            You can trust us to supply you with the best beats for your
            preferred content, comprising of music beats of all genres as well
            as top quality creativity. We will work with you to achieve your
            desired sound. Let us know how we can assist you today.
          </p>
        </div>
        <div className="col-md-5">
          <Image src={require("../images/three.jpg")} alt="Mekoyo Production" />
        </div>
      </div>

      <div className="row featurette my-5 py-5 align-items-center">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            MIX & MASTER <br />
            <span className="text-sharp-gold">
              We provide Mix & Mastering services for both Singles and Albums.
            </span>
          </h2>
          <p className="lead">
            This is one of our services available. It’s made a big difference
            for many of our clients, and the end product of our Mastered output
            is provided with the highest level of expertise and excellence. With
            our Mix and Mastering service for our clients, we ensure all final
            output are detailed, seamless, handled in a timely manner. All
            modern day International industry Mixing & Mastering standards are
            met while putting into consideration the client&apos;s needs and
            satisfaction. Whenever you work with Mr Mekoyo, you can trust that
            you’re in great experienced and professional hands
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <Image src={require("../images/four.jpg")} className="img-fluid" />
        </div>
      </div>

      <div className="row featurette my-4 align-items-center">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            SOUND TRACKS {""} <br />
            <span className="text-sharp-gold">
              we create movie sound tracks
            </span>
          </h2>
          <p className="lead">
            This service has been essential to success on many occasions. We
            have worked with movie directors and producers to create soundtracks
            for movies, a movie amongst others is MUNA featuring actress ADESUA
            ETOMI WELLINGHNTON. When it comes to our services, you can count on
            us to take care of your every need. We pride ourselves on our
            exceptional customer service, and guarantee you’ll love working with
            our team. Let us know how we can assist you today
          </p>
        </div>
        <div className="col-md-5">
          <Image
            src={require("../images/five.jpg")}
            className="img-fluid"
            alt="soundtrack object"
          />
        </div>
      </div>
    </div>
  );
}

export default Featurettes;
