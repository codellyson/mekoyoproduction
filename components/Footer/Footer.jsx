import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container-fluid py-5 ">
      <footer className="pt-5 container border-top border-primary mt-5">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <h5 className="text-sharp-gold">Contacts</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="mailto:mekoyoofficial@gmail.com"
                  className="nav-link p-0 text-white"
                >
                  mekoyoofficial@gmail.com
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  08034514228
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <form>
              <h5 className="text-sharp-gold">Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control rounded-0 border-sharp-gold"
                  placeholder="Email address"
                />
                <button
                  className="btn btn-outline-primary rounded-0 text-white "
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2021 Mr Mekoyo. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark text-sharp-gold" href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="link-dark text-sharp-gold"
                href="https://www.instagram.com/mrmekoyo"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark text-sharp-gold" href="#">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
