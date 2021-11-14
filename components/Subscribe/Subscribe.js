const Subscribe = () => {
  return (
    <div
      className="container "
      // style={{
      //   display: "flex",
      // }}
    >
      <div>
        <hgroup>
          <h2 className="text-sharp-gold">Contact Me</h2>
          <h5>
            {" "}
            Mr Mekoyo is committed to exceeding your needs. Questions, comments
            or special requests? We’d love to hear from you, so don’t hesitate
            to reach out today
          </h5>
        </hgroup>

        <div
          className="btn-group py-5"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input
            type="checkbox"
            className="btn-check "
            id="btncheck1"
            autocomplete="off"
          />
          <label
            className="btn btn-outline-sharp-gold text-white rounded-0"
            htmlFor="btncheck1"
          >
            Production
          </label>
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck2"
            autocomplete="off"
          />
          <label
            className="btn btn-outline-sharp-gold text-white rounded-0"
            htmlFor="btncheck2"
          >
            Mixing
          </label>
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck3"
            autocomplete="off"
          />
          <label
            className="btn btn-outline-sharp-gold text-white rounded-0"
            htmlFor="btncheck3"
          >
            Mastering
          </label>
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck4"
            autocomplete="off"
          />

          <label
            className="btn btn-outline-sharp-gold text-white rounded-0"
            htmlFor="btncheck5"
          >
            Other
          </label>
        </div>

        <form
        // style={{
        //   width: "60%",
        // }}
        >
          <div className="row ">
            <label
              htmlFor="firstname"
              className="form-label col-lg-6 text-sharp-gold"
            >
              First name
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
                required
                className="rounded-0 border-sharp-gold outline-sharp-gold p-3 form-control"
              />
            </label>

            <label
              htmlFor="lastname"
              className="form-label col-md-6 text-sharp-gold"
            >
              Last name
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last name"
                required
                className="rounded-0 border-sharp-gold outline-sharp-gold p-3 form-control"
              />
            </label>
          </div>

          <label htmlFor="email" className="form-label text-sharp-gold">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
            className="rounded-0 border-sharp-gold outline-sharp-gold p-3 form-control"
          />
          <small>We'll never share your email with anyone else.</small>
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-primary rounded-0 text-white py-3 px-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
