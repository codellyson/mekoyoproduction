import React from "react";

function FAQ() {
  return (
    <section className="faq-section container py-5">
      <div className="row ">
        <div className="col-12 pt-5">
          <h3>Most frequently asked questions and answers</h3>
        </div>
        <hr />
      </div>
      <h4 className="display-5 fw-600 text-center py-3"> BEATS & LICENSING</h4>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">I want to buy a beat </h4>
              <p className="card-text">
                Awesome! Go to my beat store on the homepage. Click ‘add to
                cart’, select a license, and proceed to checkout.
              </p>
              <p className="card-text">
                All files will become available to you directly afterwards. An
                email confirmation will be sent as well including all files and
                download links.
              </p>
            </div>
          </div>{" "}
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">
                Are the beats still tagged when I buy a license?{" "}
              </h4>
              <p className="card-text">
                No. All licenses come with the untagged version(s) of the
                beat(s). Regardless of which license you purchase.
              </p>
            </div>
          </div>{" "}
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">
                Do you offer Mixing & Mastering Services?
              </h4>
              <p className="card-text">
                Yes. We offer mixing and mastering services, starting at
                $250/song. We currently only offer these services to customers
                of our music. Use the contact form above to inquire.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">
                I need help choosing the right license
              </h4>
              <p className="card-text">
                If you’re completely new to buying beats online, we recommend
                reading the following guides.
              </p>
            </div>
          </div>{" "}
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">
                In which format(s) are the files sent?
              </h4>
              <p className="card-text">
                MP3, 320kbps and/or WAV 24 bit, 44.1kHz
              </p>
            </div>
          </div>{" "}
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">Can I upgrade my license (later)?</h4>
              <p className="card-text">
                Yes. You can upgrade your license. Kindly mail me
                mekoyoofficial@gmail.com and I will get back to you.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <h4 className="display-5 fw-600 text-center py-5"> PAYMENTS & PRICING</h4>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">
                What’s your price for Exclusive Rights?
              </h4>
              <p className="card-text">
                Exclusive Rights start at $800 and can go up to $5,000 USD
                (depending on which beat.) We don’t sell exclusive rights to
                every artist. Please inquire using the contact form above and
                include the following information.
              </p>
              <p className="card-text">
                All files will become available to you directly afterwards. An
                email confirmation will be sent as well including all files and
                download links.
              </p>
            </div>
          </div>{" "}
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">
                What’s your price for Exclusive Rights?
              </h4>
              <p className="card-text">
                Exclusive Rights start at $800 and can go up to $5,000 USD
                (depending on which beat.) We don’t sell exclusive rights to
                every artist. Please inquire using the contact form above and
                include the following information.
                <ul className="list-group ">
                  <li className="list-group-item  bg-transparent text-white">
                    {" "}
                    Full name & Artist Name
                  </li>
                  <li className="list-group-item  bg-transparent text-white">
                    {" "}
                    The beat title you’re inquiring for{" "}
                  </li>
                  <li className="list-group-item  bg-transparent text-white">
                    Link(s) to your recent songs
                  </li>
                </ul>
              </p>
            </div>
          </div>{" "}
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">Is my payment secured?</h4>
              <p className="card-text">
                All Payments are secured. we accept PayPal and Stripe (accepting
                all credit or debit cards) You can also pay by Bank Transfer,
                Western Union, World Remit, Tranzfar. Note: We will never see
                your credit card number or payment information. All we care
                about is your name and contact information.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">
                I received a Coupon Code, how do I use it?
              </h4>
              <p className="card-text">
                Go to the beat store and click ‘add to cart’, select your
                license, and proceed to checkout. On the checkout page is where
                you can apply the coupon code.
              </p>
            </div>
          </div>{" "}
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">
                Which payment methods do you accept?
              </h4>
              <p className="card-text">
                We accept PayPal and Creditcard (Stripe) payments. Payments plan
                can only be executed through PayPal.
              </p>
            </div>
          </div>{" "}
          <div className="card bg-transparent border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">
                What’s your price for Custom Beats?
              </h4>
              <p className="card-text">
                Please visit the Custom Beats page for more information about
                this service.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
          <div className="col-12">1 of 3</div>
        </div>
        <div className="row">
          <div className="col">1 of 3</div>
          <div className="col">1 of 3</div>
        </div> */}
    </section>
  );
}

export default FAQ;
